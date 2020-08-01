import React from 'react';
import './button.css';

const Button = ({ text, searchImages }) => {
  return (
    <div className='star-button' onClick={searchImages}>
      <a>
        <i class='fa fa-star pr-2' aria-hidden='true'></i>
        {text}
        <i class='fa fa-star pl-2' aria-hidden='true'></i>
      </a>
    </div>
  );
};

export default Button;
