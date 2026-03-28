import React from 'react';

const Loader = ({ message = "Generating your content..." }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p style={{ color: '#94a3b8', fontWeight: '500' }}>{message}</p>
    </div>
  );
};

export default Loader;
