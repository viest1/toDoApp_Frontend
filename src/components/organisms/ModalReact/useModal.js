import { useState } from 'react';

const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
