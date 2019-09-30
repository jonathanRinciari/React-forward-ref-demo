import React from 'react';
import styled from 'styled-components';

const Pad = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem;
  transition: all 150ms ease-in-out;
`;

const ColorPadAlt = ({color = 'red'}) => {
  const Pad = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem;
  background: ${color};
`;

  return (
    <Pad />
  )
}

export default ColorPadAlt;