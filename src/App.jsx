import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FaCss3 } from "react-icons/fa";


import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Davlat from "./components/pages/Davlat";

function App() {
  // const Home = () => <h1>Bosh Sahifa</h1>; 

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/davlat" element={<Davlat/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;