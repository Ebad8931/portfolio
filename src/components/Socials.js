import React from 'react';
import { socialLinks } from "../constants/data";

const Socials = () => {
  return (
    <nav className="socials">
      {socialLinks.map(link => 
        <a key={link.id} href={link.url} title={link.title} target="_blank" rel="noreferrer">
          {link.icon}
        </a>
      )}
    </nav>
  )
}

export default Socials;