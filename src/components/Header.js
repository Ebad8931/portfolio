import { useEffect, useState, useRef } from "react";
import Navigation from "./Navigation";
import Socials from "./Socials";

const Header = () => {
  const headerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollPosition > headerRef.current?.clientHeight * 2
      ? document.getElementById("header").classList.add("fixed")
      : document.getElementById("header").classList.remove("fixed");
  }, [scrollPosition]);

  useEffect(() => {
    showNav
      ? document.getElementById("header").classList.add("show-nav")
      : document.getElementById("header").classList.remove("show-nav");
  }, [showNav]);

  return (
    <header id="header" ref={headerRef}>
      <div className="container">
        <div className="row header-row">
          <div className="col-sm-8 navigation-wrapper">
            <Navigation setShowNav={setShowNav} />
          </div>
          <div className="col-8 col-sm-4">
            <Socials />
          </div>
          <div className="col-4 d-sm-none">
            <button
              onClick={() => setShowNav(!showNav)}
              className={`hamburger ${showNav ? "open" : ""}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
