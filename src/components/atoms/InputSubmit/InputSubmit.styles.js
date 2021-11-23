import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground
      ? `${theme.colors.lighterBackground} !important`
      : `${theme.colors.green200} !important`};
  border-radius: 0.7rem;
  padding: 0.7rem;
  width: ${({ setWidth }) => (setWidth ? setWidth : '200px')};
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.lighterBackground
        ? `${theme.colors.background} !important`
        : `${theme.colors.green300} !important`};
    cursor: pointer;
  }
`;
