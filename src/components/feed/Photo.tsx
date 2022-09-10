import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "../Avatar";
import { FatText } from "../shared";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { IPhoto } from "../../types/photo";
import Comments from "./Comments";
import { gql, useMutation } from "@apollo/client";
import { TOGGLE_LIKE_MUTATION } from "../../mutations/photo";

const PhotoContainer = styled.div`
    background-color: white;
    border: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 20px;
    max-width: 615px;
    margin-top: 20px;
`

const PhotoHeader = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
`
const Username = styled(FatText)`
    margin-left: 15px;
`

const PhotoFile = styled.img`
    min-width: 100%;
    max-width: 100%;
`

const PhotoData = styled.div`
    padding: 15px;
`

const PhotoActions = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    svg {
        font-size: 20px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhotoAction = styled.div`
    margin-right: 10px;
    cursor: pointer;
`

const Likes = styled(FatText)`
    display: block;
    margin-top: 15px;
`
 const Photo = ({ id, user, file, caption, likes, isMyPhoto, createdAt, comments, isLiked, commentCount} : IPhoto) => {
    const updateToggleLike = (cache : any, result : any) => {
        const { data: { toggleLike: { ok }} } = result;
        // readFragment test
        // const res = cache.readFragment({
        //     id: `Photo:${id}`,
        //     fragment: gql`
        //         fragment readPhotoLikesAndIsLiked on Photo {
        //             likes
        //             isLiked
        //         }
        //     `
        // })

        if(ok){
            cache.writeFragment({
                id: `Photo:${id}`,
                fragment: gql`
                    fragment updateLikesAndIsLiked on Photo {
                        isLiked
                        likes

                    }
                `,
                data: {
                    isLiked: !isLiked,
                    likes: !isLiked ? likes + 1 : likes - 1
                }

            })
        }
    }

  
    const [toggleLike] = useMutation(TOGGLE_LIKE_MUTATION, { 
        update: updateToggleLike
     })

    return (
        <PhotoContainer> 
            <PhotoHeader>
                <Avatar url={user.avatar} isLarge={true} />
                <Username>{user.userName}</Username>
            </PhotoHeader>
            <PhotoFile src={file} />
            <PhotoData>
                <PhotoActions>
                    <div>
                        <PhotoAction>
                            <FontAwesomeIcon onClick={() => toggleLike({ variables: { photoId: id }})} icon={ isLiked ? SolidHeart : faHeart} color={isLiked ? "tomato" : ""} size="2x" />
                        </PhotoAction>
                        <PhotoAction>
                            <FontAwesomeIcon icon={faComment} size="2x" />
                        </PhotoAction>
                        <PhotoAction>
                            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                        </PhotoAction>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faBookmark} size="2x" />
                    </div>
                </PhotoActions>
                <Likes>{likes ? likes : ""} {likes > 1 && "likes"} {likes === 1 && "like"}</Likes>
                <Comments user={user.userName} caption={caption} comments={comments} commentCount={commentCount} />
            </PhotoData>
        </PhotoContainer>
    )
 }


 export default Photo;