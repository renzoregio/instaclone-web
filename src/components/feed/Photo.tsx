import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "../Avatar";
import { FatText } from "../shared";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { IPhoto } from "../../types/photo";
import Comments from "./Comments";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE_MUTATION } from "../../mutations/photo";
import { Link } from "react-router-dom";

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

    a {
        display: flex;
        align-items: center;
    }
`
const Username = styled(FatText)`
    margin-left: 8px;
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
            const objId = `Photo:${id}`;
            cache.modify({
                id: objId,
                fields: {
                    isLiked(prev: boolean){
                        return !prev;
                    },
                    likes(prev: number){
                        return isLiked ? prev - 1 : prev + 1;
                    }
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
                <Link to={`/users/${user.userName}`}>
                    <Avatar url={user.avatar} size={30} />
                    <Username>{user.userName}</Username>
                </Link>
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
                <Comments photoId={id} user={user} caption={caption} comments={comments} commentCount={commentCount} />
            </PhotoData>
        </PhotoContainer>
    )
 }


 export default Photo;