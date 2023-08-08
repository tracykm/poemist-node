import gql from "graphql-tag"

export const getCurrentUser = gql`
  query getCurrentUser {
    currentUser {
      id
      username
    }
  }
`

export const getUser = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      id
      username
      createdAt
    }
  }
`

export const createUser = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`

export const loginUser = gql`
  mutation loginUser($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`
