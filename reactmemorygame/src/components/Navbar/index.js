import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
 

      <nav className="navbar sticky-top">
        <div className="container-fluid">
        <ul className="nav navbar-nav">

          <li className="navbar-brand">
            <a href="/">Memory Game</a>
          </li>


          <li className="instructions">Click an image to begin!</li>


          <li className="score">Score: 0 | Top Score: 0</li>

        </ul>
        </div>
      </nav>

    
    </>
  );
}

export default Navbar;
