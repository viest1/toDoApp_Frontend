import styled from 'styled-components';

export const ContainerIconP = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  width: 370px;
  ${({ isFlexEnd }) => isFlexEnd && `justify-content: flex-end;`}
`;
export const InputSearch = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green100};
  border-radius: 0.7rem;
  padding: 0.7rem;
`;
