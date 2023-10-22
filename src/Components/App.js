import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import { useState } from "react";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import Certificates from "../Pages/Certificates";
import Footer from "./Footer";
function App() {
  return (
    <div className="App" style={{minHeight: "100vh"}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/certificates" element={<Certificates />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
