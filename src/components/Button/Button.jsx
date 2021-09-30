import React from 'react';
import './Button.css';

const Button = ({ value, onCustomClick, isWhite = false }) => {
  return (
    <button
      className={isWhite ? 'button button__white' : 'button'}
      onClick={onCustomClick}
    >
      {value}
    </button>
  );
};

export default Button;