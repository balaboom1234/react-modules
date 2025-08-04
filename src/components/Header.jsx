import React from 'react';

export const Header = () => {
  return (
    <header style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>Welcome to Our React App</h1>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          margin: '1rem 0'
        }}>
          <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#products" style={{ color: 'white', textDecoration: 'none' }}>Products</a></li>
          <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}; 