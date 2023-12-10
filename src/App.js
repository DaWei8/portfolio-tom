import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./hero";
import AboutMe from "./about";
import Skills from "./skills";
import Testimonials from "./testimonials";
import Contactme from "./contactme";
import Footer from "./footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Front from "./frontendpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/frontendpage" exact Component={Front} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Testimonials />
      <Contactme />
    </div>
  );
};
