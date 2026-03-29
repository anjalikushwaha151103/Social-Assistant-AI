import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast" style={{ 
      background: type === 'error' ? 'hsl(0, 84%, 60%)' : 'hsl(142, 72%, 40%)',
      border: `1px solid ${type === 'error' ? 'hsl(0, 84%, 50%)' : 'hsl(142, 70%, 35%)'}`
    }}>
      <span>{type === 'error' ? '⚠️' : '✅'}</span>
      {message}
    </div>
  );
};

export default Toast;
