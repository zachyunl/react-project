import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Vytvořte soubor Navbar.css pro oddělení stylů

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li><Link to="/">Domů</Link></li>
        <li><Link to="/firstpage">První stránka</Link></li>
        <li><Link to="/secondpage">Druhá stránka</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
