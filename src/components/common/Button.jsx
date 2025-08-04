import React from 'react';

const Button = ({ buttonStyle, buttonText, onClick }) => {
  const getButtonStyles = () => {
    const baseStyles = {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center'
    };

    switch (buttonStyle) {
      case 'primary-button':
        return {
          ...baseStyles,
          backgroundColor: '#3498db',
          color: 'white',
          '&:hover': {
            backgroundColor: '#2980b9',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
          }
        };
      case 'secondary-button':
        return {
          ...baseStyles,
          backgroundColor: '#95a5a6',
          color: 'white',
          '&:hover': {
            backgroundColor: '#7f8c8d',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(149, 165, 166, 0.3)'
          }
        };
      case 'success-button':
        return {
          ...baseStyles,
          backgroundColor: '#27ae60',
          color: 'white',
          '&:hover': {
            backgroundColor: '#229954',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(39, 174, 96, 0.3)'
          }
        };
      case 'danger-button':
        return {
          ...baseStyles,
          backgroundColor: '#e74c3c',
          color: 'white',
          '&:hover': {
            backgroundColor: '#c0392b',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(231, 76, 60, 0.3)'
          }
        };
      case 'learn-button':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#3498db',
          border: '2px solid #3498db',
          '&:hover': {
            backgroundColor: '#3498db',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
          }
        };
      default:
        return {
          ...baseStyles,
          backgroundColor: '#3498db',
          color: 'white',
          '&:hover': {
            backgroundColor: '#2980b9',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
          }
        };
    }
  };

  const styles = getButtonStyles();
  
  return (
    <button
      style={styles}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (styles['&:hover']) {
          Object.assign(e.target.style, styles['&:hover']);
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = styles.backgroundColor;
        e.target.style.color = styles.color;
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button; 