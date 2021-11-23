import React from 'react';
import { Container, StyledButton } from './Button.style';

const Button = ({ text, onClick }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </Container>
  );
};

export default Button;
