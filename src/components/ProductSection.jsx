import React from 'react';
import Button from './common/Button';

export const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      price: '$5,000+',
      features: ['React', 'Node.js', 'MongoDB', 'Responsive Design']
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: '$8,000+',
      features: ['React Native', 'iOS', 'Android', 'Firebase']
    },
    {
      id: 3,
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      price: '$3,000+',
      features: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ];

  return (
    <section style={{
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      margin: '2rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#2c3e50', 
          marginBottom: '3rem',
          fontSize: '2.5rem'
        }}>
          Our Products & Services
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <h3 style={{ 
                color: '#3498db', 
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                {product.name}
              </h3>
              <p style={{ 
                color: '#555', 
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {product.description}
              </p>
              <div style={{ 
                marginBottom: '1.5rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Starting at {product.price}
              </div>
              <ul style={{ 
                listStyle: 'none', 
                marginBottom: '1.5rem',
                padding: 0
              }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{
                    padding: '0.5rem 0',
                    color: '#555',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      color: '#27ae60',
                      marginRight: '0.5rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                buttonStyle="primary-button" 
                buttonText="Get Started" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 