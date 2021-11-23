import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  background: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
`;

export const ContainerNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
