import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
`;

export const ContainerIconDropDown = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ContainerRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  img {
    width: 23px;
    height: 23px;
  }
`;

export const BackgroundRounded = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green100};

  ${({ isHover, theme }) =>
    isHover &&
    `&:hover {
  background: ${theme.colors.background ? theme.colors.background : theme.colors.green200}; 
  cursor: pointer;  
  }`}
`;

export const ContainerInfoApp = styled.div`
  padding: 1.3rem;
  display: grid;
  grid-template-columns: 100px 1fr;
`;

export const ContainerTitleInfoApp = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContainerDescriptionInfoApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
