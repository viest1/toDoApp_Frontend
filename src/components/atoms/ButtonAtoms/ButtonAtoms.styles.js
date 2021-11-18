import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green100};
  border-radius: 0.7rem;
  padding: 0.7rem;
  width: ${({ setWidth }) => (setWidth ? setWidth : '200px')};
  :hover {
    background-color: ${({ theme }) =>
      theme.colors.lighterBackground ? theme.colors.background : theme.colors.green200};
  }
`;
