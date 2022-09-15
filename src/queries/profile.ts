import { gql } from "@apollo/client";
import { PHOTO_FRAGMENT } from "../fragments";

const SEE_PROFILE_QUERY = gql`
    query seeProfile($userName: String!){
        seeProfile(userName: $userName){
                id
                firstName
                lastName
                userName
                bio
                avatar
                photos {
                    ...PhotoFragment
                }
                totalFollowing
                totalFollowers
                isMyProfile
                isFollowing
        }
    }
    ${PHOTO_FRAGMENT}
`

export default SEE_PROFILE_QUERY;