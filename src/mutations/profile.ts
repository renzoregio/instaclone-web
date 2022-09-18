import { gql } from "@apollo/client";

export const FOLLOW_USER_MUTATION = gql`
    mutation followUser($userName: String!){
        followUser(userName: $userName){
            ok
        }
    }
`


export const UNFOLLOW_USER_MUTATION = gql`
    mutation unfollowUser($userName: String!){
        unfollowUser(userName: $userName){
            ok
        }
    }
`