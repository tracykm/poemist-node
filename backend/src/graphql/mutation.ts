import { extendType, intArg, list, nonNull, stringArg } from "nexus";
import { TokenType, UserType } from "./User";
import { PoemType } from "./Poem";
import { TextChunkInputType, TextChunkType } from "./TextChunk";
import { Context } from "vm";
import { PrismaClient } from "@prisma/client";
import { generateAccessToken } from "../auth";

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("tokenAuth", {
      type: TokenType,
      args: {
        username: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const { username } = args;
        const prisma = ctx.prisma as PrismaClient;
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
          throw new Error("User not found");
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
      },
      resolve(_root, args, ctx) {
        const { username } = args;
        return ctx.prisma.user.upsert({
          where: { username },
          create: { username },
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
