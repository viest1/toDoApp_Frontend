import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
`;

export const ContainerGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const ContainerResults = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(10, 25px);
  height: 250px;
  width: 300px;
  overflow: auto;
`;
