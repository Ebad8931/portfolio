import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { links } from "./constants/data";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <div className="row">
          <div className="col-12">
            <p style={{ marginTop: 40, marginBottom: 40, textAlign: 'center' }}>
              <a target="_blank" rel="noreferrer" href={links.resume} className="link">Download my resume</a> or visit my <a target="_blank" rel="noreferrer" href={links.linkedin} className="link">LinkedIn Profile</a> to learn more about my journey.
            </p>
          </div>
        </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
