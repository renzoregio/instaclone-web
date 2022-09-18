import { useQuery } from "@apollo/client";
import { faBorderAll, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import SEE_PROFILE_QUERY from "../queries/profile";

const Wrapper = styled.div`
    max-width: 930px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-size: 16px;
`

const ProfileDataContainer = styled.div`
    display:flex;
    justify-content: space-around;
    width: 100%;
`

const AdditionalProfileInfoContainer = styled.div`
    width: 613px;
    height: 203px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    line-height: 23px;
   
`
const Username = styled.span`
    font-size: 28px;
    font-weight: 300;
`

const Row = styled.div`
    display: flex;
`

const FollowDataContainer = styled(Row)`
    font-size: 16px;
    margin: 20px 0px;
    div {
        width: 70%;
        display: flex;
        align-items: flex-start;

        span {
            margin-right: 25px;
        }
    }
`

const PhotosContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

const PhotoThumbnail = styled.div<{backgroundImage: string}>`
    height: 293px;
    width: 293px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    position: relative;
    margin: 10px;
    background-color: black;

    :hover {
        div {
            opacity: 1;
            cursor: pointer;
        }
    }
`

const PhotoInfoContainer = styled.div`
    opacity: 0;
    display: flex;
    background-color: #00000058;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
`

const Icon = styled.div`
    display: flex; 
    color: white;
    span {
        margin-left: 5px;
    }
`



const Divider = styled.div`
    background-color: ${props => props.theme.borderColor};
    height: 1px;
    width: 100%;
`

const PostsTab = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    border-top: solid black 1px;
    padding: 15px 0px;
    span {
        text-transform: uppercase;
        margin-left: 5px;
    }
`

const Button = styled.button`
    margin-left: 20px;
    padding: 5px 9px;
    font-size: 13px;
    font-weight: 600;
    background-color: transparent;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    color: rgb(38, 38, 38);
    text-overflow: ellipsis;
    width: auto;
    text-transform: inherit;
`

const Profile = () => {
    const { userName } = useParams();
    const { data, loading } = useQuery(SEE_PROFILE_QUERY, { variables: { userName }})
    console.log(data)

    return (
        <Layout>
            <PageTitle pageTitle={loading ? "Loading..." : `${data?.seeProfile?.userName}'s Profile`} />
            <Wrapper>
                <ProfileDataContainer>
                    <Avatar size={150} url={data?.seeProfile?.avatar} />
                    <AdditionalProfileInfoContainer>
                        <Row>
                            <Username>{data?.seeProfile?.userName}</Username>
                            
                                <Button>
                                    { data?.seeProfile?.isMyProfile && "Edit Profile" }
                                    { !data?.seeProfile?.isFollowing && !data?.seeProfile?.isMyProfile && "Follow" }
                                    { data?.seeProfile?.isFollowing && !data?.seeProfile?.isMyProfile && "Unfollow" }
                                </Button>
                            
                        </Row>
                        <FollowDataContainer>
                            <div>
                                <span><b>{data?.seeProfile?.photos.length}</b> posts</span>
                                <span><b>{data?.seeProfile?.totalFollowers}</b> followers</span>
                                <span><b>{data?.seeProfile?.totalFollowing}</b> following</span>
                            </div>
                        </FollowDataContainer>
                        <span><b>{data?.seeProfile?.firstName} {data?.seeProfile?.lastName}</b></span>
                        <span>{data?.seeProfile?.bio}</span>
                    </AdditionalProfileInfoContainer>
                </ProfileDataContainer>
                <Divider /> 
                <PostsTab>
                    <FontAwesomeIcon icon={faBorderAll} />
                    <span>posts</span>
                </PostsTab>
                <PhotosContainer>
                    { data?.seeProfile?.photos?.map((photo: any) => (
                        <PhotoThumbnail key={photo.id} backgroundImage={photo.file}>
                            <PhotoInfoContainer>
                                <Icons>
                                    <Icon>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>{photo.likes}</span>
                                    </Icon>
                                    <Icon>
                                        <FontAwesomeIcon icon={faComment} />
                                        <span>{photo.commentCount}</span>
                                    </Icon>
                                </Icons>
                            </PhotoInfoContainer>
                        </PhotoThumbnail>
                    ))}
                </PhotosContainer>
            </Wrapper>
        </Layout>
    )
}

export default Profile;