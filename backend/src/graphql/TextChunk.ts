import { inputObjectType, objectType } from "nexus";
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

export const TextChunkInputType = inputObjectType({
  name: "TextChunkInputType",
  definition(t) {
    t.boolean("isSelected");
    t.nonNull.string("text");
  },
});
