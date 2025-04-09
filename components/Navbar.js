import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <IconButton color="inherit" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <div className="search-container">
        <InputBase
          placeholder="Buscar..."
          startAdornment={<SearchIcon />}
          className="search-input"
        />
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/about" className="navbar-link">Sobre Nosotros</Link>
        <Link to="/contact" className="navbar-link">Contacto</Link>
      </div>
    </div>
  );
}

export default Navbar;
