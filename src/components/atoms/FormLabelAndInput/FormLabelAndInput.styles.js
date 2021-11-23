import styled from 'styled-components';

export const InputSearch = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green100};
  border-radius: 0.7rem;
  padding: 0.7rem;
`;

export const Container = styled.div`
  ${({ is2Columns }) =>
    is2Columns &&
    `display:flex;
gap:1rem;
align-items:center;
width:200px;
justify-content:space-between;
`}
`;
