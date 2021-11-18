import React from 'react';
import { StyledInput } from './InputSubmit.styles';

const InputSubmit = ({ value, onClick, setWidth }) => {
  return (
    <div>
      <StyledInput type="submit" value={value} onClick={onClick} setWidth={setWidth} />
    </div>
  );
};

export default InputSubmit;
