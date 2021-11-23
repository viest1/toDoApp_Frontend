import styled, { keyframes } from 'styled-components';
import { FiMousePointer } from 'react-icons/fi';

export const ContainerApp = styled.div`
  display: grid;
  background: ${({ theme }) => theme.colors.white};
  grid-template-columns: 280px 1fr;
  height: 700px;
  width: 1300px;
  border-radius: 2rem;
  position: relative;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const pointerAnimation = keyframes`
  1% { transform: translate(40px, 40px)}
  8% { transform: translate(40px, 40px)}
  9% { transform: translate(227px, 40px)}
  16% { transform: translate(227px, 40px)}
  17% { transform: translate(480px, 180px)}
  24% { transform: translate(480px, 180px)}
  25% { transform: translate(480px, 210px)}
  32% { transform: translate(480px, 210px)}
  33% { transform: translate(480px, 245px)}
  40% { transform: translate(480px, 245px)}
  41% { transform: translate(345px, 373px)}
  48% { transform: translate(345px, 373px)}
  49% { transform: translate(675px, 373px)}
  56% { transform: translate(675px, 373px)}
  57% { transform: translate(785px, 373px)}
  64% { transform: translate(785px, 373px)}
  65% { transform: translate(900px, 373px)}
  72% { transform: translate(900px, 373px)}
  73% { transform: translate(1210px, 66px)}
  80% { transform: translate(1210px, 66px)}
  81% { transform: translate(1155px, 66px)}
  88% { transform: translate(1155px, 66px)}
  89% { transform: translate(350px, 66px)}
  96% { opacity:1; transform: translate(350px, 66px)}
  96.01% { opacity:0; transform: translate(-300px, -300px)}
  100% { opacity:0; transform: translate(-300px, -300px)}
`;

const textAnimation = keyframes`
  0% { opacity: 0; transform: translate(40px, 70px)}
  0.99% { opacity: 0; transform: translate(40px, 70px)}
  1% { opacity: 1; transform: translate(40px, 70px)}
  8% { transform: translate(40px, 70px)}
  9% { transform: translate(227px, 70px)}
  16% { transform: translate(227px, 70px)}
  17% { transform: translate(480px, 210px)}
  24% { transform: translate(480px, 210px)}
  25% { transform: translate(480px, 240px)}
  32% { transform: translate(480px, 240px)}
  33% { transform: translate(480px, 275px)}
  40% { transform: translate(480px, 275px)}
  41% { transform: translate(345px, 403px)}
  48% { transform: translate(345px, 403px)}
  49% { transform: translate(675px, 403px)}
  56% { transform: translate(675px, 403px)}
  57% { transform: translate(785px, 403px)}
  64% { transform: translate(785px, 403px)}
  65% { transform: translate(900px, 403px)}
  72% { transform: translate(900px, 403px)}
  73% { transform: translate(1190px, 96px)}
  80% { transform: translate(1190px, 96px)}
  81% { transform: translate(1155px, 96px)}
  88% { transform: translate(1155px, 96px)}
  89% { transform: translate(350px, 96px)}
  96% { opacity:1; transform: translate(350px, 96px)}
  96.01% { opacity:0; transform: translate(-300px, -300px)}
  100% { opacity:0; transform: translate(-300px, -300px)}
`;

export const TutorialElement = styled(FiMousePointer)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${pointerAnimation};
  animation-duration: ${({ dur }) => (dur ? `${dur}s` : '1s')};
  animation-fill-mode: forwards;
`;

export const TutorialElement2 = styled.div`
  background: ${({ theme }) => theme.colors.whiteHover};
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${textAnimation};
  animation-duration: ${({ dur }) => (dur ? `${dur}s` : '1s')};
  animation-fill-mode: forwards;
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  border-radius: 1rem;
  max-width: 200px;
  text-align: center;
`;

export const ModalChildren = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  h2 {
    text-align: center;
  }
`;
