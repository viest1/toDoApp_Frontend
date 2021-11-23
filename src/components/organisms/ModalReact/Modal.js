import React from 'react';
import Modal from 'react-modal';
import { CloseIcon, customStyles } from './Modal.styles';

Modal.setAppElement(document.getElementById('modal-container'));

const MyModal = ({ closeModal, isOpen, children }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <CloseIcon onClick={closeModal} />
        {children}
      </Modal>
    </div>
  );
};

export default MyModal;
