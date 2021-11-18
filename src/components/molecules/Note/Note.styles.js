import styled from 'styled-components';

export const ContainerNote = styled.div`
  display: grid;
  grid-template-rows: 10px 1fr 30px;
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
  padding: 0.7rem 1.4rem 0.5rem 1.4rem;
  border-radius: 1rem;
  width: 300px;
  max-height: 240px;
  overflow: auto;
  gap: 1rem;
  position: ${({ positionStatic }) => (positionStatic ? 'static' : 'relative')};
`;

export const ContainerNote2 = styled.div`
  display: grid;
  grid-template-rows: 10px 1fr 30px;
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
  padding: 0.7rem 1.4rem 0.5rem 1.4rem;
  border-radius: 1rem;
  width: 300px;
  max-height: 240px;
  overflow: auto;
  gap: 1rem;
`;

export const ContainerIconHeader = styled.div`
  margin-left: auto;
`;

export const ContainerIconsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconsFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const PDate = styled.p`
  font-size: 10px;
`;

export const IconsHeader = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  margin-bottom: 0.4rem;
`;

export const NoteDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ColorizedRibbon = styled.span`
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ counter }) =>
    counter === 1
      ? 'red'
      : counter === 2
      ? 'blue'
      : counter === 3
      ? 'green'
      : `${({ theme }) => theme.colors.black}`};
  border-radius: 0.2rem;
`;
