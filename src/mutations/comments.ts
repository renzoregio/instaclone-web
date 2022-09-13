import { gql } from "@apollo/client";

export const CREATE_COMMENT_MUTATION = gql`
    mutation createComment($photoId: Int!, $payload: String!){
        createComment(photoId: $photoId, payload: $payload){
            ok
            error
            id
        }
    }
`