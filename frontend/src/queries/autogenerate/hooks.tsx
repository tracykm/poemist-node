import * as Types from "./operations"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {}
export const PoemDetailsFragmentDoc = gql`
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
export const GetRandomBookDocument = gql`
  query getRandomBook {
    randomBook {
      id
      title
      text
      startIdx
    }
  }
`

/**
 * __useGetRandomBookQuery__
 *
 * To run a query within a React component, call `useGetRandomBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomBookQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRandomBookQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetRandomBookQuery,
    Types.GetRandomBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetRandomBookQuery,
    Types.GetRandomBookQueryVariables
  >(GetRandomBookDocument, options)
}
export function useGetRandomBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetRandomBookQuery,
    Types.GetRandomBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetRandomBookQuery,
    Types.GetRandomBookQueryVariables
  >(GetRandomBookDocument, options)
}
export type GetRandomBookQueryHookResult = ReturnType<
  typeof useGetRandomBookQuery
>
export type GetRandomBookLazyQueryHookResult = ReturnType<
  typeof useGetRandomBookLazyQuery
>
export type GetRandomBookQueryResult = Apollo.QueryResult<
  Types.GetRandomBookQuery,
  Types.GetRandomBookQueryVariables
>
export const GetSinglePoemDocument = gql`
  query getSinglePoem($id: Int!) {
    poem(id: $id) {
      ...PoemDetails
    }
  }
  ${PoemDetailsFragmentDoc}
`

/**
 * __useGetSinglePoemQuery__
 *
 * To run a query within a React component, call `useGetSinglePoemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSinglePoemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSinglePoemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSinglePoemQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetSinglePoemQuery,
    Types.GetSinglePoemQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetSinglePoemQuery,
    Types.GetSinglePoemQueryVariables
  >(GetSinglePoemDocument, options)
}
export function useGetSinglePoemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetSinglePoemQuery,
    Types.GetSinglePoemQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetSinglePoemQuery,
    Types.GetSinglePoemQueryVariables
  >(GetSinglePoemDocument, options)
}
export type GetSinglePoemQueryHookResult = ReturnType<
  typeof useGetSinglePoemQuery
>
export type GetSinglePoemLazyQueryHookResult = ReturnType<
  typeof useGetSinglePoemLazyQuery
>
export type GetSinglePoemQueryResult = Apollo.QueryResult<
  Types.GetSinglePoemQuery,
  Types.GetSinglePoemQueryVariables
>
export const GetPoemsDocument = gql`
  query getPoems($first: Int) {
    poemPages(first: $first) {
      edges {
        node {
          ...PoemDetails
        }
      }
    }
  }
  ${PoemDetailsFragmentDoc}
`

/**
 * __useGetPoemsQuery__
 *
 * To run a query within a React component, call `useGetPoemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoemsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPoemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetPoemsQuery,
    Types.GetPoemsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.GetPoemsQuery, Types.GetPoemsQueryVariables>(
    GetPoemsDocument,
    options,
  )
}
export function useGetPoemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetPoemsQuery,
    Types.GetPoemsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.GetPoemsQuery, Types.GetPoemsQueryVariables>(
    GetPoemsDocument,
    options,
  )
}
export type GetPoemsQueryHookResult = ReturnType<typeof useGetPoemsQuery>
export type GetPoemsLazyQueryHookResult = ReturnType<
  typeof useGetPoemsLazyQuery
>
export type GetPoemsQueryResult = Apollo.QueryResult<
  Types.GetPoemsQuery,
  Types.GetPoemsQueryVariables
>
export const GetPoemsByAuthorDocument = gql`
  query getPoemsByAuthor($authorId: Int, $first: Int) {
    poemPages(authorId: $authorId, first: $first) {
      edges {
        node {
          ...PoemDetails
        }
      }
    }
  }
  ${PoemDetailsFragmentDoc}
`

/**
 * __useGetPoemsByAuthorQuery__
 *
 * To run a query within a React component, call `useGetPoemsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoemsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoemsByAuthorQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPoemsByAuthorQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetPoemsByAuthorQuery,
    Types.GetPoemsByAuthorQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetPoemsByAuthorQuery,
    Types.GetPoemsByAuthorQueryVariables
  >(GetPoemsByAuthorDocument, options)
}
export function useGetPoemsByAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetPoemsByAuthorQuery,
    Types.GetPoemsByAuthorQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetPoemsByAuthorQuery,
    Types.GetPoemsByAuthorQueryVariables
  >(GetPoemsByAuthorDocument, options)
}
export type GetPoemsByAuthorQueryHookResult = ReturnType<
  typeof useGetPoemsByAuthorQuery
>
export type GetPoemsByAuthorLazyQueryHookResult = ReturnType<
  typeof useGetPoemsByAuthorLazyQuery
>
export type GetPoemsByAuthorQueryResult = Apollo.QueryResult<
  Types.GetPoemsByAuthorQuery,
  Types.GetPoemsByAuthorQueryVariables
>
export const CreatePoemDocument = gql`
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
  ${PoemDetailsFragmentDoc}
`
export type CreatePoemMutationFn = Apollo.MutationFunction<
  Types.CreatePoemMutation,
  Types.CreatePoemMutationVariables
>

/**
 * __useCreatePoemMutation__
 *
 * To run a mutation, you first call `useCreatePoemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePoemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPoemMutation, { data, loading, error }] = useCreatePoemMutation({
 *   variables: {
 *      textChunks: // value for 'textChunks'
 *      bookId: // value for 'bookId'
 *      startIdx: // value for 'startIdx'
 *      passage: // value for 'passage'
 *   },
 * });
 */
export function useCreatePoemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreatePoemMutation,
    Types.CreatePoemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.CreatePoemMutation,
    Types.CreatePoemMutationVariables
  >(CreatePoemDocument, options)
}
export type CreatePoemMutationHookResult = ReturnType<
  typeof useCreatePoemMutation
>
export type CreatePoemMutationResult =
  Apollo.MutationResult<Types.CreatePoemMutation>
export type CreatePoemMutationOptions = Apollo.BaseMutationOptions<
  Types.CreatePoemMutation,
  Types.CreatePoemMutationVariables
>
export const UpdatePoemDocument = gql`
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
  ${PoemDetailsFragmentDoc}
`
export type UpdatePoemMutationFn = Apollo.MutationFunction<
  Types.UpdatePoemMutation,
  Types.UpdatePoemMutationVariables
>

/**
 * __useUpdatePoemMutation__
 *
 * To run a mutation, you first call `useUpdatePoemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePoemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePoemMutation, { data, loading, error }] = useUpdatePoemMutation({
 *   variables: {
 *      textChunks: // value for 'textChunks'
 *      id: // value for 'id'
 *      backgroundId: // value for 'backgroundId'
 *      colorRange: // value for 'colorRange'
 *   },
 * });
 */
export function useUpdatePoemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdatePoemMutation,
    Types.UpdatePoemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdatePoemMutation,
    Types.UpdatePoemMutationVariables
  >(UpdatePoemDocument, options)
}
export type UpdatePoemMutationHookResult = ReturnType<
  typeof useUpdatePoemMutation
>
export type UpdatePoemMutationResult =
  Apollo.MutationResult<Types.UpdatePoemMutation>
export type UpdatePoemMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdatePoemMutation,
  Types.UpdatePoemMutationVariables
>
export const DeletePoemDocument = gql`
  mutation deletePoem($id: Int!) {
    deletePoem(id: $id) {
      id
    }
  }
`
export type DeletePoemMutationFn = Apollo.MutationFunction<
  Types.DeletePoemMutation,
  Types.DeletePoemMutationVariables
>

/**
 * __useDeletePoemMutation__
 *
 * To run a mutation, you first call `useDeletePoemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePoemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePoemMutation, { data, loading, error }] = useDeletePoemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePoemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeletePoemMutation,
    Types.DeletePoemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeletePoemMutation,
    Types.DeletePoemMutationVariables
  >(DeletePoemDocument, options)
}
export type DeletePoemMutationHookResult = ReturnType<
  typeof useDeletePoemMutation
>
export type DeletePoemMutationResult =
  Apollo.MutationResult<Types.DeletePoemMutation>
export type DeletePoemMutationOptions = Apollo.BaseMutationOptions<
  Types.DeletePoemMutation,
  Types.DeletePoemMutationVariables
>
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    currentUser {
      id
      username
    }
  }
`

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >(GetCurrentUserDocument, options)
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >(GetCurrentUserDocument, options)
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  Types.GetCurrentUserQuery,
  Types.GetCurrentUserQueryVariables
>
export const GetUserDocument = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      id
      username
      createdAt
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetUserQuery,
    Types.GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetUserQuery,
    Types.GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserQueryResult = Apollo.QueryResult<
  Types.GetUserQuery,
  Types.GetUserQueryVariables
>
export const CreateUserDocument = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  Types.CreateUserMutation,
  Types.CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateUserMutation,
    Types.CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.CreateUserMutation,
    Types.CreateUserMutationVariables
  >(CreateUserDocument, options)
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult =
  Apollo.MutationResult<Types.CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateUserMutation,
  Types.CreateUserMutationVariables
>
export const LoginUserDocument = gql`
  mutation loginUser($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`
export type LoginUserMutationFn = Apollo.MutationFunction<
  Types.LoginUserMutation,
  Types.LoginUserMutationVariables
>

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.LoginUserMutation,
    Types.LoginUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.LoginUserMutation,
    Types.LoginUserMutationVariables
  >(LoginUserDocument, options)
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>
export type LoginUserMutationResult =
  Apollo.MutationResult<Types.LoginUserMutation>
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  Types.LoginUserMutation,
  Types.LoginUserMutationVariables
>
