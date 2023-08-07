import { extendType, intArg, list, nonNull, stringArg } from "nexus";
import { TokenType, UserType } from "./User";
import { PoemType } from "./Poem";
import { TextChunkInputType, TextChunkType } from "./TextChunk";
import { Context } from "vm";
import { PrismaClient } from "@prisma/client";
import { checkPassword, generateAccessToken, hashPassword } from "../auth";

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("tokenAuth", {
      type: TokenType,
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const { username, password } = args;
        const prisma = ctx.prisma as PrismaClient;
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
          throw new Error("User not found");
        }
        const correct = await checkPassword({
          password,
          passwordHash: user.passwordHash,
        });
        if (!correct) {
          throw new Error("Incorrect password");
        }
        return {
          token: generateAccessToken(user),
        };
      },
    });

    t.field("createUser", {
      type: UserType,
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const { username, password } = args;
        const passwordHash = await hashPassword(password);
        return ctx.prisma.user.upsert({
          where: { username, passwordHash },
          create: { username, passwordHash },
          update: {},
        });
      },
    });

    t.field("createPoem", {
      type: PoemType,
      args: {
        textChunks: list(TextChunkInputType),
        bookId: nonNull(intArg()),
        startIdx: nonNull(intArg()),
        passage: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx: Context) {
        const prisma = ctx.prisma as PrismaClient;
        const { textChunks, startIdx, bookId, passage } = args;
        const poem = await prisma.poem.create({
          data: {
            startIdx,
            bookId,
            passage,
            authorId: ctx.user.id,
          },
        });
        textChunks.forEach(async (textChunk: any) => {
          await prisma.textChunk.create({
            data: { ...textChunk, poemId: poem.id },
          });
        });
        return poem;
      },
    });
  },
});
