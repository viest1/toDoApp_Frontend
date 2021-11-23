import { AiOutlineCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    position: 'relative',
    padding: '2rem',
  },
};

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    cursor: pointer;
  }
`;
