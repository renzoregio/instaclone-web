import { gql } from "@apollo/client";

export const SEE_FEED_QUERY = gql`
    query seeFeed {
        seeFeed {
            id
            user {
                userName
                avatar
            }
            file
            caption
            likes
            comments
            isMyPhoto
            createdAt
            isLiked
        }
    }
`
