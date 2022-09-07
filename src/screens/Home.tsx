import { useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import { SEE_FEED_QUERY } from "../queries/feed";
import { IPhoto } from "../types/photo";




const Home = () => {
    const { data } = useQuery(SEE_FEED_QUERY);
    

    return (
        <>
            {data?.seeFeed.map((photo : IPhoto) => (
                <Photo key={photo.id} {...photo} />
            ))}
        </>
    )
}

export default Home;