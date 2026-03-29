import React from 'react';

const Loader = ({ message = "Generating your content..." }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p style={{ color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
        {message}
      </p>
    </div>
  );
};

export default Loader;
