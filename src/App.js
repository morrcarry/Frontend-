import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/content/Home";
import Partner from "./components/partn/Partner";
import About from "./components/person/About";
import Level from "./components/level/Level";
import Industry from "./components/industry/Industry";
import Features from "./components/features/features";
import Discussion from "./components/discussion/Discussion";
import LoginPage from "./components/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route pathe="/" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <Navbar />
      <Home />
      <Partner />
      <About />
      <Level />
      <Industry />
      <Features />
      <Discussion />
      <Footer />
    </div>
  );
}

export default App;
