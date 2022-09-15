import { gql } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

export const SEE_FEED_QUERY = gql`
    query seeFeed {
        seeFeed {
            ...PhotoFragment
            user {
                userName
                avatar
            }
            caption
            comments {
                ...CommentFragment
            }
            isMyPhoto
            createdAt
            isLiked
        }
    }
    ${PHOTO_FRAGMENT}
    ${COMMENT_FRAGMENT}
`
