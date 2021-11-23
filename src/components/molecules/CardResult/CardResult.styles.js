import styled from 'styled-components';
import { GiTrophyCup } from 'react-icons/gi';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
`;

export const ContainerPlace = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const IconTrophy = styled(GiTrophyCup)`
  * {
    color: ${({ index }) => (index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 && 'saddlebrown')};
  }
`;

export const StyledP = styled.p`
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  line-height: 0.75;
  margin: 10px 0;
  padding: 0.1rem;
`;
