import { User } from "nexus-prisma";
import { list, objectType } from "nexus";
import { PoemType } from "./Poem";

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

export const TokenType = objectType({
  name: "TokenType",
  description: "JWT token",
  definition(t) {
    t.string("token");
  },
});
