import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/pokeball.png" alt="PokeBall" />
      <h1>Welcome to the Pokedex!</h1>
      <nav >
        <Link key="home-page" to={'/'}>Home Page</Link>
        <Link key="search" to={'/pokemon/search/'}>Search Page</Link>
      </nav>    
    </div>
  );
};

export default Header;
