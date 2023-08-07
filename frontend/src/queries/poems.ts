import gql from "graphql-tag"

const PoemDetails = gql`
  fragment PoemDetails on Poem {
    id
    backgroundId
    colorRange
    createdAt
    updatedAt
    author {
      id
      username
    }
    book {
      id
      title
    }
    textChunks {
      id
      text
      isSelected
    }
  }
`

export const getSinglePoem = gql`
  query getSinglePoem($id: Int!) {
    poem(id: $id) {
      ...PoemDetails
    }
  }
`

export const getPoems = gql`
  query getPoems($first: Int) {
    poemPages(first: $first) {
      edges {
        node {
          ...PoemDetails
        }
      }
    }
  }
`

export const getPoemsByAuthor = gql`
  query getPoemsByAuthor($authorId: Int, $first: Int) {
    poemPages(authorId: $authorId, first: $first) {
      edges {
        node {
          ...PoemDetails
        }
      }
    }
  }
`

export const createPoem = gql`
  mutation createPoem(
    $textChunks: [TextChunkInputType]!
    $bookId: Int!
    $startIdx: Int!
    $passage: String
  ) {
    createPoem(
      textChunks: $textChunks
      bookId: $bookId
      startIdx: $startIdx
      passage: $passage
    ) {
      ...PoemDetails
    }
  }
`

export const updatePoem = gql`
  mutation updatePoem(
    $textChunks: [TextChunkInputType]!
    $id: Int!
    $backgroundId: Int
    $colorRange: Int
  ) {
    updatePoem(
      textChunks: $textChunks
      id: $id
      backgroundId: $backgroundId
      colorRange: $colorRange
    ) {
      ...PoemDetails
    }
  }
`

export const deletePoem = gql`
  mutation deletePoem($id: Int!) {
    deletePoem(id: $id) {
      id
    }
  }
`
