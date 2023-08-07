import { list, objectType } from "nexus";
import { Poem } from "nexus-prisma";
import { TextChunkType } from "./TextChunk";
import { BookType } from "./Book";
import { UserType } from "./User";

export const PoemType = objectType({
  name: Poem.$name,
  description: Poem.$description,
  definition(t) {
    t.field(Poem.id);
    t.field(Poem.passage);
    t.field(Poem.colorRange);
    t.field(Poem.backgroundId);
    t.field(Poem.createdAt);
    t.field(Poem.updatedAt);
    t.field({
      ...Poem.textChunks,
      type: list(TextChunkType),
    });
    t.field({
      ...Poem.book,
      type: BookType,
    });
    t.field({
      ...Poem.author,
      type: UserType,
    });
  },
});
