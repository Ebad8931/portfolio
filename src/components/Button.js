import React from 'react'

const Button = ({ url, type, size, text }) => (
  <a href={url} className={`button ${type} ${size}`} target="_blank" rel="noreferrer">
    <span>{text}</span>
    {type === "text" && (
      <strong>&nbsp;
        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.58301 12.4166L12.4163 1.58325M12.4163 1.58325H1.58301M12.4163 1.58325V12.4166" stroke="#ffbd23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </strong>
    )}
  </a>
);

export default Button;