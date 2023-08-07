import {
  asNexusMethod,
  connectionPlugin,
  intArg,
  makeSchema,
  nonNull,
  queryType,
} from "nexus";
import { join } from "path";
import { DateTimeResolver } from "graphql-scalars";
import { BookType } from "./Book";
import { PoemType } from "./Poem";
import { UserType } from "./User";
import { Mutation } from "./mutation";

const DateTime = asNexusMethod(DateTimeResolver, "datetime");

const query = queryType({
  definition(t) {
    (t as any).connectionField("userPages", {
      type: UserType,
      nodes(...args: any[]) {
        return args[2].prisma.user.findMany();
      },
      totalCount(_: any, args: any, ctx: any) {
        return ctx.prisma.user.count();
      },
    });

    t.nonNull.field("user", {
      type: UserType,
      args: {
        id: nonNull(intArg()),
      },
      resolve(_, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });

    (t as any).connectionField("poemPages", {
      type: PoemType,
      additionalArgs: {
        authorId: intArg(),
      },
      nodes(_: any, args: any, ctx: any) {
        const authorId = args.authorId;
        return ctx.prisma.poem.findMany({ where: { authorId } });
      },
      totalCount(_: any, args: any, ctx: any) {
        const authorId = args.authorId;
        return ctx.prisma.poem.count({ where: { authorId } });
      },
    });

    t.nonNull.field("currentUser", {
      type: UserType,
      resolve(_, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: ctx.user.id,
          },
        });
      },
    });

    t.nonNull.field("poem", {
      type: PoemType,
      args: {
        id: nonNull(intArg()),
      },
      resolve(_, args, ctx) {
        return ctx.prisma.poem.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });

    t.nonNull.field("randomBook", {
      type: BookType,
      async resolve(_, args, ctx) {
        const totalBooks = await ctx.prisma.book.count();
        return ctx.prisma.book.findFirst({
          skip: Math.floor(Math.random() * totalBooks),
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [query, Mutation, DateTime],
  plugins: [
    connectionPlugin({
      extendConnection: {
        totalCount: { type: "Int" },
      },
    }),
  ],
  contextType: {
    // Path to the module where the context type is exported
    module: join(__dirname, "./context.ts"),
    // Name of the export in that module
    export: "Context",
  },
});
