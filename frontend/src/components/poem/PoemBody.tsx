import { BodyDiv } from "src/components/poem/PoemDiv"
import { TextChunk } from "src/queries/autogenerate/schemas"

const TextSpan = ({ isSelected, text }: TextChunk) => (
  <span className={isSelected ? "is-selected" : "not-selected"}>
    <span className="text">{text}</span>
  </span>
)

export default function PoemBody({ textChunks }: { textChunks: TextChunk[] }) {
  return (
    <BodyDiv className="poem-text">
      {textChunks &&
        textChunks.map((textSpan, i) => <TextSpan key={i} {...textSpan} />)}
    </BodyDiv>
  )
}
