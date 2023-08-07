export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
}

export type Book = {
  __typename?: "Book"
  id: Scalars["Int"]
  title: Scalars["String"]
  author: Scalars["String"]
  text: Scalars["String"]
  createdAt: Scalars["DateTime"]
  startIdx: Scalars["Int"]
}

export type Mutation = {
  __typename?: "Mutation"
  tokenAuth?: Maybe<TokenType>
  createUser?: Maybe<User>
  createPoem?: Maybe<Poem>
  updatePoem?: Maybe<Poem>
  deletePoem?: Maybe<Poem>
}

export type MutationTokenAuthArgs = {
  username: Scalars["String"]
  password: Scalars["String"]
}

export type MutationCreateUserArgs = {
  username: Scalars["String"]
  password: Scalars["String"]
}

export type MutationCreatePoemArgs = {
  textChunks?: Maybe<Array<Maybe<TextChunkInputType>>>
  bookId: Scalars["Int"]
  startIdx: Scalars["Int"]
  passage?: Maybe<Scalars["String"]>
  colorRange?: Maybe<Scalars["Int"]>
  backgroundId?: Maybe<Scalars["Int"]>
}

export type MutationUpdatePoemArgs = {
  id: Scalars["Int"]
  textChunks?: Maybe<Array<Maybe<TextChunkInputType>>>
  colorRange?: Maybe<Scalars["Int"]>
  backgroundId?: Maybe<Scalars["Int"]>
}

export type MutationDeletePoemArgs = {
  id: Scalars["Int"]
}

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo"
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"]
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"]
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars["String"]>
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars["String"]>
}

export type Poem = {
  __typename?: "Poem"
  id: Scalars["Int"]
  passage?: Maybe<Scalars["String"]>
  colorRange: Scalars["Int"]
  backgroundId: Scalars["Int"]
  createdAt: Scalars["DateTime"]
  updatedAt: Scalars["DateTime"]
  textChunks?: Maybe<Array<Maybe<TextChunk>>>
  book?: Maybe<Book>
  author?: Maybe<User>
}

export type PoemConnection = {
  __typename?: "PoemConnection"
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<PoemEdge>>>
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars["Int"]>
}

export type PoemEdge = {
  __typename?: "PoemEdge"
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"]
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Poem>
}

export type Query = {
  __typename?: "Query"
  userPages?: Maybe<UserConnection>
  user: User
  poemPages?: Maybe<PoemConnection>
  currentUser: User
  poem: Poem
  randomBook: Book
}

export type QueryUserPagesArgs = {
  first?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  last?: Maybe<Scalars["Int"]>
  before?: Maybe<Scalars["String"]>
}

export type QueryUserArgs = {
  id: Scalars["Int"]
}

export type QueryPoemPagesArgs = {
  authorId?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  last?: Maybe<Scalars["Int"]>
  before?: Maybe<Scalars["String"]>
}

export type QueryPoemArgs = {
  id: Scalars["Int"]
}

export type TextChunk = {
  __typename?: "TextChunk"
  id: Scalars["Int"]
  text: Scalars["String"]
  isSelected: Scalars["Boolean"]
}

export type TextChunkInputType = {
  isSelected?: Maybe<Scalars["Boolean"]>
  text: Scalars["String"]
}

/** JWT token */
export type TokenType = {
  __typename?: "TokenType"
  token?: Maybe<Scalars["String"]>
}

export type User = {
  __typename?: "User"
  id: Scalars["Int"]
  username: Scalars["String"]
  createdAt: Scalars["DateTime"]
  poems?: Maybe<Array<Maybe<Poem>>>
}

export type UserConnection = {
  __typename?: "UserConnection"
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<UserEdge>>>
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars["Int"]>
}

export type UserEdge = {
  __typename?: "UserEdge"
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"]
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<User>
}
