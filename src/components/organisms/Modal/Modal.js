import React, { useEffect } from 'react';
import { Container, ContainerChildrens, ContainerCloseIcon } from './Modal.styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ReactDOM from 'react-dom';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ children, handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Container>
      <ContainerChildrens>
        <ContainerCloseIcon>
          <AiOutlineCloseCircle onClick={handleClose} />
        </ContainerCloseIcon>
        {children}
      </ContainerChildrens>
    </Container>,
    modalNode
  );
};

export default Modal;
