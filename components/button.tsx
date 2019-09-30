import React from 'react';
import styled from 'styled-components';
import { darken, lighten} from 'polished';

interface button {
  handleOnClick: VoidFunction;
  label: string;
  color?: string;
}


const Button: React.FC<button> = ({handleOnClick, label, color}) => {

  const StyledButton = styled.button`
    height: 25px;
    min-width: 70px;
    background: ${color};
    box-shadow: 0px 0px 4px 1px  rgba(0,0,0,0.5);
    transition: all 200ms ease-in-out;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: #ccc;
    display: flex;
    justify-content: center;
    &:hover {
      background: ${lighten(0.1, color)};
    }

    &:active {
      box-shadow: none;
    }
  `;


  return (
    <StyledButton onClick={handleOnClick}>
     {label}
    </StyledButton>
  )
}

export default Button;