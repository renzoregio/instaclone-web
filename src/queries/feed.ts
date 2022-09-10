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
            commentCount
            comments {
                id
                payload
                isMyComment
                createdAt
                user {
                    userName
                    avatar
                }
            }
            isMyPhoto
            createdAt
            isLiked
        }
    }
`
