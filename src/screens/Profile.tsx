import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import SEE_PROFILE_QUERY from "../queries/profile";

const Profile = () => {
    const { userName } = useParams();
    console.log(userName)
    const { data } = useQuery(SEE_PROFILE_QUERY, { variables: { 
        userName
    }})

    console.log(data)
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;