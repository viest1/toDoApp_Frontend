import React from 'react';
import { InputSearch, Container } from './FormLabelAndInput.styles';

const FormLabelAndInput = ({
  id,
  placeholder,
  label,
  type = 'text',
  required = true,
  handleInput,
  is2Columns,
  value,
  isNotValid,
  onBlur,
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
        value={value}
        onChange={handleInput}
        isNotValid={isNotValid}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default FormLabelAndInput;
