import { useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { isDarkModeThemeVar, isLoggedInVar } from "./apollo";
import routes from "./routes";
import { Home, Login, SignUp, NotFound } from "./screens"
import { darkModeTheme, GlobalStyles, lightModeTheme } from "./screens/styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkMode = useReactiveVar(isDarkModeThemeVar);

  return (  
   <div>
      <HelmetProvider>
        <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path={routes.home} element={ isLoggedIn ? <Home /> : <Login />} />
              { !isLoggedIn && <Route path={routes.signUp} element={ <SignUp /> } /> }
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
   </div>
  );
}

export default App;
