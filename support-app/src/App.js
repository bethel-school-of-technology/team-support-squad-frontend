import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Supports from "./components/Supports";
import Update from "./CRUD/Update";
import { ItemContextProvider } from "./context/ItemContext";

function App() {

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };
  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  return (
    <ItemContextProvider>
      <>
        <Navbar />
        <Hero />
        <Slider />
        <Supports />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<Update onCancel={handleCancel} onEdit={handleEdit} />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </>
    </ItemContextProvider>
  );
}

export default App;
