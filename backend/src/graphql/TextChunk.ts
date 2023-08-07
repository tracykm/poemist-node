import { objectType } from "nexus";
import { TextChunk } from "nexus-prisma";

export const TextChunkType = objectType({
  name: TextChunk.$name,
  description: TextChunk.$description,
  definition(t) {
    t.field(TextChunk.id);
    t.field(TextChunk.text);
    t.field(TextChunk.isSelected);
  },
});
