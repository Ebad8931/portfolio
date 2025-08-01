import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
