import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img src={ Logo } width="30" height="30" class="d-inline-block align-top" alt="logo-fachero" />
      Henry - Wheater App
    </a>
  <SearchBar onSearch={onSearch} />
</nav>
  );
};

export default Nav;
