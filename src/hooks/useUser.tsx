import { gql, useQuery, useReactiveVar } from "@apollo/client"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar, logUserOut } from "../apollo"

const GET_MY_PROFILE_QUERY = gql`
    query getMyProfile {
        getMyProfile {
            userName
            avatar
        }
    }
`

interface IUseUserResults {
    data: {
        getMyProfile: {
            avatar: string,
            userName: string
        }
    }
}

function useUser(): IUseUserResults | null  {
    const hasToken = useReactiveVar(isLoggedInVar);
    const { data } = useQuery(GET_MY_PROFILE_QUERY, {
        skip: !hasToken  
    })
    const navigate = useNavigate()

    useEffect(() => {
        if(data?.getMyProfile === null){
            logUserOut(navigate)
        }
    }, [data, navigate])
    
    return { data };
}

export default useUser;