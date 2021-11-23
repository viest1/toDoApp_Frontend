import React, { useContext, useEffect, useState } from 'react';
import questionMarkIcon from 'assets/icons/question-mark.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import {
  Container,
  ContainerIconDropDown,
  ContainerRightSide,
  BackgroundRounded,
  ContainerInfoApp,
  ContainerTitleInfoApp,
  ContainerDescriptionInfoApp,
  StyledP,
} from './Header.styles';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';

const Header = () => {
  const {
    name,
    setName,
    avatarSrcHeader,
    setAvatarSrcHeader,
    tasksToDo,
    setSearchTasksToDo,
    setIsSearchingTasks,
    setSearchTasksCompleted,
    setSearchTasksInProgress,
    tasksInProgress,
    tasksCompleted,
    userId,
  } = useContext(ToDoAppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionMark = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      setIsSearchingTasks(true);
    } else {
      setIsSearchingTasks(false);
    }
    setSearchTasksToDo(
      sortByTimestamp(
        tasksToDo.filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
    setSearchTasksInProgress(
      sortByTimestamp(
        tasksInProgress.filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
    setSearchTasksCompleted(
      sortByTimestamp(
        tasksCompleted.filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
  };

  useEffect(() => {
    const avatarStorage = localStorage.getItem('avatar');
    avatarStorage !== null && setAvatarSrcHeader(avatarStorage);
  }, [setAvatarSrcHeader]);

  useEffect(() => {
    const getName = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const jsonResponse = await response.json();
      setName(jsonResponse.name);
    };

    if (userId) {
      getName();
    }
  }, [userId, setName]);

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <ContainerRightSide>
        <BackgroundRounded isHover>
          <img src={questionMarkIcon} alt="question mark icon" onClick={handleQuestionMark} />
        </BackgroundRounded>
        {isOpen && (
          <Modal handleClose={handleClose}>
            <h2>Information About App:</h2>
            <ContainerInfoApp>
              <ContainerTitleInfoApp>
                <StyledP>Dashboard:</StyledP>
                <StyledP>Notes:</StyledP>
                <StyledP>Mini Game:</StyledP>
                <StyledP>Settings:</StyledP>
              </ContainerTitleInfoApp>
              <ContainerDescriptionInfoApp>
                <p>Your place to write your Tasks</p>
                <p>Your place to write your private Notes</p>
                <p>Your place to relax and play in quite funny Game</p>
                <p>Your place where you have Settings your App </p>
              </ContainerDescriptionInfoApp>
            </ContainerInfoApp>
          </Modal>
        )}
        <ContainerIconDropDown>
          <p>{name}</p>
          <IoMdArrowDropdown />
        </ContainerIconDropDown>
        <BackgroundRounded>
          <img src={avatarSrcHeader} alt="face icon" />
        </BackgroundRounded>
      </ContainerRightSide>
    </Container>
  );
};

export default Header;
