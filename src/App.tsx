import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { isDarkModeThemeVar, isLoggedInVar } from "./apollo";
import { Home, Login, NotFound } from "./screens"
import { darkModeTheme, GlobalStyles, lightModeTheme } from "./screens/styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkMode = useReactiveVar(isDarkModeThemeVar);

  return (  
   <div>
      <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={ isLoggedIn ? <Home /> : <Login />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
      </ThemeProvider>
   </div>
  );
}

export default App;
