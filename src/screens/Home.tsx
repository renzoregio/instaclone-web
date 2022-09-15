import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { SEE_FEED_QUERY } from "../queries/feed";
import { IPhoto } from "../types/photo";

const FeedContainer = styled.div`
    margin-top: 100px;
`


const Home = () => {
    const { data } = useQuery(SEE_FEED_QUERY);
    

    return (
        <>
            <PageTitle pageTitle="Home"/>
            <FeedContainer>
                {data?.seeFeed.map((photo : IPhoto) => (
                    <Photo key={photo.id} {...photo} />
                ))}
            </FeedContainer>
        </>
    )
}

export default Home;