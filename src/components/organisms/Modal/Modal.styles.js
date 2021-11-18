import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size:14px;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  :before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,.95),rgba(0,0,0,.95));
`;

export const ContainerChildrens = styled.div`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
  padding: 0.7rem 1rem 1.4rem 1rem;
  border-radius: 1rem;
  width: 350px;
  overflow: auto;
  gap: 0.5rem;
`;

export const ContainerCloseIcon = styled.div`
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
