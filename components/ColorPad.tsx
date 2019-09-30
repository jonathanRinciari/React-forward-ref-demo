import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Pad = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem;
  background: red;
  transition: all 150ms ease-in-out;
`;
const ColorPad = forwardRef(({}, ref: any) => {
  return (
    <Pad ref={ref}/>
  )
});

export default ColorPad;