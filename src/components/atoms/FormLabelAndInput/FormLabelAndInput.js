import React from 'react';
import styled from 'styled-components';

const InputSearch = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green100};
  border-radius: 0.7rem;
  padding: 0.7rem;
`;

const Container = styled.div`
  ${({ is2Columns }) =>
    is2Columns &&
    `display:flex;
gap:1rem;
align-items:center;
width:200px;
justify-content:space-between;
`}
`;

const FormLabelAndInput = ({
  id,
  placeholder,
  label,
  type = 'text',
  required = true,
  handleInput,
  is2Columns,
}) => {
  return (
    <Container is2Columns={is2Columns}>
      <label htmlFor={id}>{label} </label>
      <InputSearch
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        onChange={handleInput}
      />
    </Container>
  );
};

export default FormLabelAndInput;
