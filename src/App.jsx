import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestWorks from "./components/LatestWorks";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Recognition from "./components/Recognition";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
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
