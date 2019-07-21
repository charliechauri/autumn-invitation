import React from 'react';
import IButton from './index.interface';
import './index.css';

function Button({ text, onClick }: IButton) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
