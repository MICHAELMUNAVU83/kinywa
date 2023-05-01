import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

import LatestWorks from "./components/LatestWorks";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
