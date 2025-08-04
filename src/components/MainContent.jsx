import React from 'react';

export const MainContent = () => {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>About Our Company</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          We are a leading technology company dedicated to creating innovative solutions 
          that help businesses grow and succeed in the digital age. Our team of experts 
          works tirelessly to deliver high-quality products and services to our clients.
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          To empower businesses with cutting-edge technology solutions that drive growth, 
          efficiency, and success in an ever-evolving digital landscape.
        </p>
      </section>
      
      <section>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>Innovation</h3>
            <p style={{ color: '#555' }}>We stay ahead of the curve with the latest technologies and trends.</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>Quality</h3>
            <p style={{ color: '#555' }}>Every product we deliver meets the highest standards of quality.</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>Support</h3>
            <p style={{ color: '#555' }}>Our dedicated support team is always ready to help you succeed.</p>
          </div>
        </div>
      </section>
    </main>
  );
}; 