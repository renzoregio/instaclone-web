import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client"

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

export const logUserOut = () => {
    localStorage.removeItem(AUTHORIZATION);
    isLoggedInVar(false);
}