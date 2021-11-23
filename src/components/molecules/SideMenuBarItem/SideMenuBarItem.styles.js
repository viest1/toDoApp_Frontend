import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerIconTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledLink = styled(NavLink).attrs({ activeclassname: 'active-link' })`
  color: ${({ theme }) => theme.colors.grey};
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green300};
  }

  &.active-link {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    left: -63px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green300};
  }
`;
