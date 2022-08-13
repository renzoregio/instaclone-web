import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Login, NotFound } from "./screens"

function App() {
  let isLoggedIn = false;

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
