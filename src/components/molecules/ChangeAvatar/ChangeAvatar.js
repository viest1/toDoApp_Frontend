import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import faceCatIcon from 'assets/icons/icon-cat-face.png';
import faceHotIcon from 'assets/icons/icon-hot-face.png';
import faceDogIcon from 'assets/icons/icon-dog-face.png';
import faceMonsterIcon from 'assets/icons/icon-monster-face.png';
import faceFrogIcon from 'assets/icons/icon-frog-face.png';
import faceIcon from 'assets/icons/icon-face.png';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import Modal from '../../organisms/Modal/Modal';
import { BackgroundRounded } from '../../organisms/Header/Header.styles';

const ContainerAvatars = styled.div`
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

const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ChangeAvatar = () => {
  const { setAvatarSrc, avatarSrc } = useContext(ToDoAppContext);
  const [isOpen, setIsOpen] = useState(false);
  const arrayFaces = [faceCatIcon, faceFrogIcon, faceDogIcon, faceMonsterIcon, faceHotIcon, faceIcon];

  const handleDisplayAvatars = () => {
    setIsOpen(true);
  };

  const handleChangeAvatar = (src) => {
    setAvatarSrc(src);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.getItem('avatar') !== null && setAvatarSrc(localStorage.getItem('avatar'));
  }, []);

  return (
    <div>
      <ContainerAvatar>
        <p>Change Your Avatar</p>
        <BackgroundRounded isHover style={{ width: '50px', height: '50px' }}>
          <img style={{ width: '35px', height: '35px' }} src={avatarSrc} alt="" onClick={handleDisplayAvatars} />
        </BackgroundRounded>
      </ContainerAvatar>
      {isOpen && (
        <Modal handleClose={handleClose}>
          <ContainerAvatars>
            {arrayFaces.map((item, index) => (
              <div>
                <BackgroundRounded isHover style={{ width: '50px', height: '50px' }}>
                  <img src={item} key={index} alt="" onClick={() => handleChangeAvatar(item)} />
                </BackgroundRounded>
              </div>
            ))}
          </ContainerAvatars>
        </Modal>
      )}
    </div>
  );
};

export default ChangeAvatar;
