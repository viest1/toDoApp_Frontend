import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.7rem 1rem 0.7rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.black};
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => (theme.colors.blackHover ? theme.colors.blackHover : theme.colors.whiteHover)};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
