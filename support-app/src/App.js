import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Supports from "./components/Supports";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Supports />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
