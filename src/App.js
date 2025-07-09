import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter className="app_container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
