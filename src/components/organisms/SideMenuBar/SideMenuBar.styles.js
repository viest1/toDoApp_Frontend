import styled from 'styled-components';
export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-right: 3px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const TitleApp = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerTitleDarkMode = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
