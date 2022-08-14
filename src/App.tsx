import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { isLoggedInVar } from "./apollo";
import { Home, Login, NotFound } from "./screens"

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (  
   <div>
      <Router>
        <Routes>
          <Route path="/" element={ isLoggedIn ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
   </div>
  );
}

export default App;
