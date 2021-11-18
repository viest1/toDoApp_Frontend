import styled from 'styled-components';

export const ContainerTask = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ContainerIconP = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: 7px;
    height: 7px;
  }
`;

export const TaskTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;

export const TaskDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
