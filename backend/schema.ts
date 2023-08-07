import { Book, Poem, TextChunk, User } from "nexus-prisma";
import { asNexusMethod, list, makeSchema, objectType, queryType } from "nexus";
import { join } from "path";
import { DateTimeResolver } from "graphql-scalars";

const DateTime = asNexusMethod(DateTimeResolver, "datetime");

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.username);
    t.field(User.createdAt);
    t.field({
      ...User.poems,
      type: list(PoemType),
    });
  },
});

console.log(User.username);
console.log(User.poems);
export const BookType = objectType({
  name: Book.$name,
  description: Book.$description,
  definition(t) {
    t.field(Book.id);
    t.field(Book.title);
    t.field(Book.author);
    t.field(Book.text);
    t.field(Book.createdAt);
  },
});
export const PoemType = objectType({
  name: Poem.$name,
  description: Poem.$description,
  definition(t) {
    t.field(Poem.id);
    t.field(Poem.passage);
  },
});
export const TextChunkType = objectType({
  name: TextChunk.$name,
  description: TextChunk.$description,
  definition(t) {
    t.field(TextChunk.id);
    t.field(TextChunk.text);
    t.field(TextChunk.isSelected);
  },
});

const query = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: UserType,
      resolve(_, __, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

export const schema = makeSchema({
  types: [query, DateTime],
  contextType: {
    // Path to the module where the context type is exported
    module: join(__dirname, "./context.ts"),
    // Name of the export in that module
    export: "Context",
  },
});
