import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import TheoHeras from "./pages/TheoHeras";
import StephenGrant from "./pages/StephenGrant";
import "./styles/App.css";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/theo-website" element={<TheoHeras />} />
          <Route path="/projects/stephen-website" element={<StephenGrant />} />
        </Routes>
      </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter className="app_container">
      <Header></Header>
      <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
