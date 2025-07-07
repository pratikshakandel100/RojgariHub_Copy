import Homepage from "./pages/Homepage";
import RojgarHubHomepage from "./pages/Homepage";

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>

      <Route path="/" element={<Homepage/>}></Route>



      </Routes>
    </Router>
    </>
  );
}

export default App;
