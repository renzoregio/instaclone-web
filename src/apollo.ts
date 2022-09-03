import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client"
import { NavigateFunction } from "react-router-dom";
import routes from "./routes";
import { setContext } from '@apollo/client/link/context';


const AUTHORIZATION = "authorization";
const DARK_MODE = "darkMode"

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTHORIZATION)
    return {
        headers: {
            ...headers,
            authorization: token
        }
    }
})

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
})
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(AUTHORIZATION)));
export const isDarkModeThemeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

export const logUserIn = (authorization : string) => {
    localStorage.setItem(AUTHORIZATION, authorization);
    isLoggedInVar(true);
}

export const logUserOut = (navigate: NavigateFunction) => {
    localStorage.removeItem(AUTHORIZATION);
    navigate(routes.home, { replace: true });
    isLoggedInVar(false);
}

export const enableDarkMode = () => {
    localStorage.setItem(DARK_MODE, "true")
    isDarkModeThemeVar(true)
}

export const disableDarkMode = () => {
    localStorage.removeItem(DARK_MODE)
    isDarkModeThemeVar(false)
}