import { gql, useQuery } from "@apollo/client";
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
`

const PhotoHeader = styled.div`
    padding: 5px 10px;
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
    margin-left: 5px;
`
const Home = () => {
    const { data } = useQuery(SEE_FEED_QUERY);
    
    return (
        <div>
            {data?.seeFeed.map((photo : IPhoto) => (
                <PhotoContainer key={photo.id}> 
                    <PhotoHeader>
                        <Avatar url={photo.user.avatar} />
                        <Username>{photo.user.userName}</Username>
                    </PhotoHeader>
                </PhotoContainer>
            ))}
        </div>
    )
}

export default Home;