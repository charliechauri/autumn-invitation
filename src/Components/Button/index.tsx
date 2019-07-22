import React from 'react';
import IButton from './index.interface';
import './index.css';

function Button({ text, onClick, variation}: IButton) {
  return (
    <button className={`button ${variation}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
