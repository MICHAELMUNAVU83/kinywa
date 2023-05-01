import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import LatestWorks from "./components/Home/LatestWorks";
import Pricing from "./components/Home/Pricing";
import Clients from "./components/Home/Clients";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Recognition from "./components/Home/Recognition";
import NavBar from "./components/Home/NavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About />
        <LatestWorks />
        <Pricing />
        <Clients />
        <Contact />
        <Footer />
        <Recognition />
      </BrowserRouter>
    </div>
  );
}

export default App;
