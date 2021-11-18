import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
  padding: 1.8rem;
  border-radius: 1rem;
  width: 300px;
  overflow: auto;
  gap: 1rem;
  position: relative;
`;

export const TextareaStyled = styled.textarea`
  resize: none;
  background: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
  border: none;
  outline: none;
  border-radius: 0.7rem;
  padding: 0.7rem;
`;

export const LabelStyled = styled.label`
  background: ${({ theme }) => (theme.colors.background ? theme.colors.background : theme.colors.green100)};
`;

export const InputTitle = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.colors.lighterBackground ? theme.colors.lighterBackground : theme.colors.green200};
  border-radius: 0.7rem;
  padding: 0.7rem;
`;

export const IconClose = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 12px;
  right: 12px;
`;
