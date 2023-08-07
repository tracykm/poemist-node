import { objectType } from "nexus";
import { Book } from "nexus-prisma";

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
