import { asNexusMethod, intArg, makeSchema, nonNull, queryType } from "nexus";
import { join } from "path";
import { DateTimeResolver } from "graphql-scalars";
import { BookType } from "./Book";
import { PoemType } from "./Poem";
import { UserType } from "./User";
import { Mutation } from "./mutation";

const DateTime = asNexusMethod(DateTimeResolver, "datetime");

const query = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: UserType,
      resolve(_, __, ctx) {
        return ctx.prisma.user.findMany();
      },
    });

    t.nonNull.list.nonNull.field("poems", {
      type: PoemType,
      resolve(_, __, ctx) {
        return ctx.prisma.poem.findMany();
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
  contextType: {
    // Path to the module where the context type is exported
    module: join(__dirname, "./context.ts"),
    // Name of the export in that module
    export: "Context",
  },
});
