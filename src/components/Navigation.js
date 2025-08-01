import React, { useState } from 'react';
import { navigationLinks } from "../constants/data";

const NavBar = ({ setShowNav }) => {
  const [active, setActive] = useState("home");

  const handleActiveLink = (linkId) => {
    setActive(linkId);
    setShowNav(false);
  };

  return (
    <nav className="navigation">
      {navigationLinks.map(link => 
        <a
          key={link.id}
          href={link.url}
          className={link.id === active ? "active" : "" }
          onClick={() => handleActiveLink(link.id)}
        >
          {link.title}
        </a>
      )}
    </nav>
  )
}

export default NavBar;