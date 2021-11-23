import styled from 'styled-components';

export const ContainerAvatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 35px;
    height: 35px;
  }
  img:hover {
    cursor: pointer;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
