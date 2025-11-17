// src/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Nav;
