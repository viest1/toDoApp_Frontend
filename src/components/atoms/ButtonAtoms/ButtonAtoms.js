import React from 'react';
import { Button } from './ButtonAtoms.styles';

const ButtonAtoms = ({ onClick, text }) => {
  return (
    <div>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
};

export default ButtonAtoms;
