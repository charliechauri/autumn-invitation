import React from 'react';
import IHeart from './index.interface';
import './index.css';

function Heart({ size, onClick, isAnimated }: IHeart) {
  return (
    <div
      className={
        `
          heart
          heart--${size}
          ${isAnimated ? 'heart--animated': ''}
        `
      }
      onClick={onClick}
    />
  );
}

export default Heart;
