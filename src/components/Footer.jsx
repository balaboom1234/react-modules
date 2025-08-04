import React from 'react';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '3rem 2rem 1rem',
      marginTop: '3rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#3498db' }}>About Us</h3>
          <p style={{ lineHeight: '1.6', color: '#bdc3c7' }}>
            We are a technology company dedicated to creating innovative solutions 
            that help businesses grow and succeed in the digital age.
          </p>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#3498db' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#home" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Services</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>About</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#3498db' }}>Services</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>Web Development</li>
            <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>Mobile App Development</li>
            <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>Cloud Solutions</li>
            <li style={{ marginBottom: '0.5rem', color: '#bdc3c7' }}>Consulting</li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#3498db' }}>Contact Info</h3>
          <div style={{ color: '#bdc3c7', lineHeight: '1.8' }}>
            <p>📍 123 Tech Street, Digital City</p>
            <p>📧 info@techcompany.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>🕒 Mon-Fri: 9AM-6PM</p>
          </div>
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid #34495e',
        paddingTop: '1rem',
        textAlign: 'center',
        color: '#bdc3c7'
      }}>
        <p style={{ margin: 0 }}>
          © 2024 Tech Company. All rights reserved. | 
          <a href="#privacy" style={{ color: '#bdc3c7', textDecoration: 'none', marginLeft: '1rem' }}>
            Privacy Policy
          </a> | 
          <a href="#terms" style={{ color: '#bdc3c7', textDecoration: 'none', marginLeft: '1rem' }}>
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}; 