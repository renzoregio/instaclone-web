import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client"
import { NavigateFunction } from "react-router-dom";
import routes from "./routes";

const AUTHORIZATION = "authorization";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(AUTHORIZATION)));
export const isDarkModeThemeVar = makeVar(false);
export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true
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