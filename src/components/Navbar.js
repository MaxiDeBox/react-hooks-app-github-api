import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand ps-2">
        Github Search
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" exact className="nav-link">Главная</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Информация</Link>
        </li>
      </ul>
    </nav>
  </div>
);
