import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestWorks from "./components/LatestWorks";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <LatestWorks />
    </div>
  );
}

export default App;
