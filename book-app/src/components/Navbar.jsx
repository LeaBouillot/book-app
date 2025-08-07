// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Accueil</Link>
      <Link to="/add">Ajouter un livre</Link>
    </nav>
  );
};

export default Navbar;
