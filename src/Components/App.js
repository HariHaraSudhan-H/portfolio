import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import { useState } from "react";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
function App() {
  const [value, setValue] = useState("home");
  return (
    <div className="App">
      <Navbar value={value} setValue={setValue}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </div>
  );
}

export default App;
