import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Register } from "./pages/register"
import { Error404 } from "./routes/error404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//resolver ruta button en simon 
import "./assets/stylesheets/App.sass";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Simon" element={<Simon/>}/>
          <Route path="*" element={<Error404/>} />

        </Routes>
      </Router>
  );
}

export default App;