import React from "react";
import { Link, useLocation } from 'react-router-dom';

import '../style/header.css';

const styles = {
  navbar: {
    backgroundColor: "#58C2C7",
  },
  navbarA: {
    color: "#0000FF",
    fontSize: "19px",
  },
  h1: {
    fontSize: "50px",
  },
  padding: {
    padding: "8px",
  }
};

function Header() {
  const currentPage = useLocation().pathname;
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Jim McGreevy</h1>
      </header>
      <ul style={styles.navbarA} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">

          <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>
        </li>
        <li style={styles.padding}  className="nav-item">
       
          <Link key={2} className="nav-link text-light" to="/Portfolio">
          Portfolio
        </Link>
        </li>
        <li style={styles.padding} className="nav-item">
          <Link key={3} className="nav-link text-light" to="/Contact">
          Contact
        </Link>
        </li>
        <li style={styles.padding} className="nav-item">
          <Link key={4} className="nav-link text-light" to="/Resume">
          Resume
        </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Header;
