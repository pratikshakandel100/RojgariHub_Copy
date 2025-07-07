import Forgetpassword from "./pages/Auth/Forgetpassword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/Homepage";
import RojgarHubHomepage from "./pages/Homepage";

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>

      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/forgetpassword" element={<Forgetpassword/>}></Route>
      

      </Routes>
    </Router>
    </>
  );
}

export default App;
