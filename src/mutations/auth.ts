import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
    mutation login($userName: String!, $password: String!){
        login(userName: $userName, password: $password){
            ok
            token
            error
        }
    }
`

export const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount($firstName: String!, $lastName: String, $userName: String!, $email: String!, $password: String!){
        createAccount(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password){
            ok
            error
        }
    }
`