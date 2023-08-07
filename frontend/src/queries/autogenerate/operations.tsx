import * as Types from "./schemas"

export type GetRandomBookQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetRandomBookQuery = { __typename?: "Query" } & {
  randomBook: { __typename?: "Book" } & Pick<
    Types.Book,
    "id" | "title" | "text" | "startIdx"
  >
}

export type PoemDetailsFragment = { __typename?: "Poem" } & Pick<
  Types.Poem,
  "id" | "backgroundId" | "colorRange" | "createdAt" | "updatedAt"
> & {
    author?: Types.Maybe<
      { __typename?: "User" } & Pick<Types.User, "id" | "username">
    >
    book?: Types.Maybe<
      { __typename?: "Book" } & Pick<Types.Book, "id" | "title">
    >
    textChunks?: Types.Maybe<
      Array<
        Types.Maybe<
          { __typename?: "TextChunk" } & Pick<
            Types.TextChunk,
            "id" | "text" | "isSelected"
          >
        >
      >
    >
  }

export type GetSinglePoemQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]
}>

export type GetSinglePoemQuery = { __typename?: "Query" } & {
  poem: { __typename?: "Poem" } & PoemDetailsFragment
}

export type GetPoemsQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars["Int"]>
}>

export type GetPoemsQuery = { __typename?: "Query" } & {
  poemPages?: Types.Maybe<
    { __typename?: "PoemConnection" } & {
      edges?: Types.Maybe<
        Array<
          Types.Maybe<
            { __typename?: "PoemEdge" } & {
              node?: Types.Maybe<{ __typename?: "Poem" } & PoemDetailsFragment>
            }
          >
        >
      >
    }
  >
}

export type GetPoemsByAuthorQueryVariables = Types.Exact<{
  authorId?: Types.Maybe<Types.Scalars["Int"]>
  first?: Types.Maybe<Types.Scalars["Int"]>
}>

export type GetPoemsByAuthorQuery = { __typename?: "Query" } & {
  poemPages?: Types.Maybe<
    { __typename?: "PoemConnection" } & {
      edges?: Types.Maybe<
        Array<
          Types.Maybe<
            { __typename?: "PoemEdge" } & {
              node?: Types.Maybe<{ __typename?: "Poem" } & PoemDetailsFragment>
            }
          >
        >
      >
    }
  >
}

export type CreatePoemMutationVariables = Types.Exact<{
  textChunks:
    | Array<Types.Maybe<Types.TextChunkInputType>>
    | Types.Maybe<Types.TextChunkInputType>
  bookId: Types.Scalars["Int"]
  startIdx: Types.Scalars["Int"]
  passage?: Types.Maybe<Types.Scalars["String"]>
}>

export type CreatePoemMutation = { __typename?: "Mutation" } & {
  createPoem?: Types.Maybe<{ __typename?: "Poem" } & PoemDetailsFragment>
}

export type UpdatePoemMutationVariables = Types.Exact<{
  textChunks:
    | Array<Types.Maybe<Types.TextChunkInputType>>
    | Types.Maybe<Types.TextChunkInputType>
  id: Types.Scalars["Int"]
  backgroundId?: Types.Maybe<Types.Scalars["Int"]>
  colorRange?: Types.Maybe<Types.Scalars["Int"]>
}>

export type UpdatePoemMutation = { __typename?: "Mutation" } & {
  updatePoem?: Types.Maybe<{ __typename?: "Poem" } & PoemDetailsFragment>
}

export type DeletePoemMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"]
}>

export type DeletePoemMutation = { __typename?: "Mutation" } & {
  deletePoem?: Types.Maybe<{ __typename?: "Poem" } & Pick<Types.Poem, "id">>
}

export type GetCurrentUserQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCurrentUserQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<Types.User, "id" | "username">
}

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]
}>

export type GetUserQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & Pick<
    Types.User,
    "id" | "username" | "createdAt"
  >
}

export type CreateUserMutationVariables = Types.Exact<{
  username: Types.Scalars["String"]
  password: Types.Scalars["String"]
}>

export type CreateUserMutation = { __typename?: "Mutation" } & {
  createUser?: Types.Maybe<{ __typename?: "User" } & Pick<Types.User, "id">>
}

export type LoginUserMutationVariables = Types.Exact<{
  username: Types.Scalars["String"]
  password: Types.Scalars["String"]
}>

export type LoginUserMutation = { __typename?: "Mutation" } & {
  tokenAuth?: Types.Maybe<
    { __typename?: "TokenType" } & Pick<Types.TokenType, "token">
  >
}
