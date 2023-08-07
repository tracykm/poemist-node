import { extendType, intArg, list, nonNull, stringArg } from "nexus";
import { TokenType, UserType } from "./User";
import { PoemType } from "./Poem";
import { TextChunkInputType } from "./TextChunk";
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
        passage: stringArg(),
        colorRange: intArg(),
        backgroundId: intArg(),
      },
      async resolve(_root, args, ctx: Context) {
        const prisma = ctx.prisma as PrismaClient;
        const {
          textChunks,
          startIdx,
          bookId,
          passage,
          colorRange,
          backgroundId,
        } = args;
        const poem = await prisma.poem.create({
          data: {
            startIdx,
            bookId,
            passage,
            colorRange,
            backgroundId,
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

    t.field("updatePoem", {
      type: PoemType,
      args: {
        id: nonNull(intArg()),
        textChunks: list(TextChunkInputType),
        colorRange: intArg(),
        backgroundId: intArg(),
      },
      async resolve(_root, args, ctx: Context) {
        const prisma = ctx.prisma as PrismaClient;
        const { id, textChunks, colorRange, backgroundId } = args;
        const poem = await prisma.poem.update({
          where: { id, authorId: ctx.user.id },
          data: {
            colorRange,
            backgroundId,
            authorId: ctx.user.id,
          },
        });
        if (!textChunks) return poem;
        await prisma.textChunk.deleteMany({
          where: { poemId: poem.id },
        });
        textChunks.forEach(async (textChunk: any) => {
          await prisma.textChunk.create({
            data: { ...textChunk, poemId: poem.id },
          });
        });
        return poem;
      },
    });

    t.field("deletePoem", {
      type: PoemType,
      args: {
        id: nonNull(intArg()),
      },
      async resolve(_root, args, ctx: Context) {
        const prisma = ctx.prisma as PrismaClient;
        const { id } = args;
        const poem = await prisma.poem.findUnique({
          where: { id },
        });
        if (!poem) {
          throw new Error("Poem not found");
        }
        if (poem.authorId !== ctx.user.id) {
          throw new Error("You are not the author of this poem");
        }
        await prisma.textChunk.deleteMany({
          where: { poemId: poem.id },
        });
        await prisma.poem.delete({
          where: { id },
        });
        return poem;
      },
    });
  },
});
