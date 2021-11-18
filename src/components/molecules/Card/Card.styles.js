import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
  padding: 0.8rem;
  border-radius: 1rem;
  height: 540px;
  overflow: auto;
  gap: 1rem;
`;

export const ContainerTitleNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCard = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  margin: 0;
`;

export const Button = styled.button`
  background: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.green300};
  border-radius: 0.7rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: block;
  width: 100%;
  outline: none;
  border: none;

  &:hover {
    background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
    cursor: pointer;
  }
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerNumberTasks = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.green300};
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
  margin-bottom: 0.2rem;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.4rem;
`;
