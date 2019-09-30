import React from 'react';

interface button {
  handleOnClick: VoidFunction;
  label: string;
}

const Button: React.FC<button> = ({handleOnClick, label}) => {

  return (
    <button onClick={handleOnClick}>
     {label}
    </button>
  )
}

export default Button;