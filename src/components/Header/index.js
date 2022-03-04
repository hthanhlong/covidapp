import React from "react";
import "./style.scss";
import Hero from "../Hero";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <div className="header-brand">VAND</div>
          <nav className="header-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
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
