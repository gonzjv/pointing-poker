import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo-wrapper">
          <div className="logo" />
          <div className="logo-letter">
            <span className="down">P</span>
            <span className=" up">P</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
