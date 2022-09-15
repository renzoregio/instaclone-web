import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { isDarkModeThemeVar, isLoggedInVar, client } from "./apollo";
import Layout from "./components/Layout";
import routes from "./routes";
import { Home, Login, SignUp, NotFound } from "./screens"
import Profile from "./screens/Profile";
import { darkModeTheme, GlobalStyles, lightModeTheme } from "./screens/styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkMode = useReactiveVar(isDarkModeThemeVar);

  return (  
   <div>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
            <GlobalStyles />
            <Router>
              <Routes>
                <Route path={routes.home} element={ isLoggedIn ? <Layout> <Home /> </Layout> :  <Login /> } />
                { !isLoggedIn && <Route path={routes.signUp} element={ <SignUp /> } /> }
                <Route path={`/users/:userName`} element={<Profile />} />
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
   </div>
  );
}

export default App;
