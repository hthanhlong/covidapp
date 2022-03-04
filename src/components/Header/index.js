import React from "react";
import "./style.scss";
import Hero from "../Hero";


const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <div className="header-brand">VAND</div>
          <nav className="header-nav">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div className="header-hero">
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
