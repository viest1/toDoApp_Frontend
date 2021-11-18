import styled from 'styled-components';

export const ContainerApp = styled.div`
  display: grid;
  background: ${({ theme }) => theme.colors.white};
  grid-template-columns: 280px 1fr;
  height: 700px;
  width: 1300px;
  border-radius: 2rem;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
