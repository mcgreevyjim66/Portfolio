import React from "react";
import { Link, useLocation } from 'react-router-dom';

import '../style/header.css';
import JimAvatar from "../../assets/img/jim_avatar.png"

const styles = {
  avatar: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
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
  const isActive = (path) => currentPage === path;
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Jim McGreevy</h1>
      </header>
      <img  style={styles.avatar} src={JimAvatar} alt="Jim McGreevy" />
      <ul style={styles.navbarA} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">
        <Link
            key={1}
            className={`nav-link ${isActive('/') ? 'bg-sucess' : 'text-light'}`}
            to="/">
            About Me
          </Link>
        </li>
        <li style={styles.padding}  className="nav-item">
       

        <Link
            key={1}
            className={`nav-link ${isActive('/Portfolio') ? 'bg-sucess' : 'text-light'}`}
            to="/Portfolio">
            Portfolio
          </Link>
        </li>
        <li style={styles.padding} className="nav-item">
        <Link
            key={1}
            className={`nav-link ${isActive('/Contact') ? 'bg-sucess' : 'text-light'}`}
            to="/Contact">
            Contact
          </Link>
        </li>
        <li style={styles.padding} className="nav-item">
        <Link
            key={1}
            className={`nav-link ${isActive('/Resume') ? 'bg-sucess' : 'text-light'}`}
            to="/Resume">
            Resume
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Header;
