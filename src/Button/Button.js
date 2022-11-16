import React from 'react';

const Button = ({children}) => {
  return (
    <button className="btn tracking-wider btn-primary bg-gradient-to-r from-primary to-secondary text-white">
      {children}
    </button>
  );
};

export default Button;
