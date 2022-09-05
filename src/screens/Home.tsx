import { gql, useQuery } from "@apollo/client";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";


const SEE_FEED_QUERY = gql`
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
        }
    }
`

const PhotoContainer = styled.div`
    background-color: white;
    border: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 20px;
    max-width: 615px;
`

const PhotoHeader = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
`

interface IPhoto {
    id: string,
    user: {
        userName: string,
        avatar: string
    },
    file: string,
    caption: string,
    likes: number,
    isMyPhoto: boolean,
    createdAt: string,
    comments: number
}

const Username = styled(FatText)`
    margin-left: 15px;
`

const PhotoFile = styled.img`
    min-width: 100%;
`

const PhotoData = styled.div`
    padding: 15px;
`

const PhotoActions = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhotoAction = styled.div`
    margin-right: 10px;
`

const Likes = styled(FatText)`
    display: block;
    margin-top: 15px;
`

const Home = () => {
    const { data } = useQuery(SEE_FEED_QUERY);
    
    return (
        <div>
            {data?.seeFeed.map((photo : IPhoto) => (
                <PhotoContainer key={photo.id}> 
                    <PhotoHeader>
                        <Avatar url={photo.user.avatar} isLarge={true} />
                        <Username>{photo.user.userName}</Username>
                    </PhotoHeader>
                    <PhotoFile src={photo.file} />
                    <PhotoData>
                        <PhotoActions>
                            <div>
                                <PhotoAction>
                                    <FontAwesomeIcon icon={faHeart} size="2x" />
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
                        <Likes>{photo.likes ? photo.likes : ""} {photo.likes > 1 && "likes"} {photo.likes === 1 && "like"}</Likes>
                    </PhotoData>
                </PhotoContainer>
            ))}
        </div>
    )
}

export default Home;