import { gql } from "@apollo/client";

export const DELETE_COMMENT_MUTATION = gql`
    mutation deleteComment($id: Int!){
        deleteComment(id: $id){
            ok
        }
    }
`