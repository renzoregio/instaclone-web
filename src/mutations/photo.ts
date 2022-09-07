import { gql } from "@apollo/client";

export const TOGGLE_LIKE_MUTATION = gql`
    mutation toggleLike($photoId: Int!) {
        toggleLike(photoId: $photoId){
            ok
            error
        }
    }
`