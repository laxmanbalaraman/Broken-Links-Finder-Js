import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="nav">
        <ul className="navList">
          <div className="navListItem">
            <li>BLF.</li>
          </div>
          <div className="navListItem">
            <li>Home</li>
          </div>
          <div className="navListItem">
            <li>About</li>
          </div>
          <div className="navListItem">
            <li>Contact</li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
