import React, { useContext, useEffect, useState } from 'react';
import SideMenuBar from '../../organisms/SideMenuBar/SideMenuBar';
import {
  ContainerApp,
  ContainerCenter,
  ModalChildren,
  TutorialElement,
  TutorialElement2,
} from './MainContainerApp.styles';
import { useNavigate } from 'react-router-dom';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import Modal from '../../organisms/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

const MainContainerApp = ({ children, setThemeState }) => {
  const [textTutorial, setTextTutorial] = useState('');
  const [endTutorial, setEndTutorial] = useState(false);
  const tasks = [
    {
      title: 'Test To Do',
      description: 'Test To Do',
      progress: 'To Do',
      id: uuidv4(),
      timestamp: Date.now() + 1,
    },
    {
      title: 'Test In Progress',
      description: 'Test In Progress',
      progress: 'In Progress',
      id: uuidv4(),
      timestamp: Date.now() + 1,
    },
  ];
  const texts = [
    'App Name',
    'Click to Change Layout - Dark Mode/Light Mode',
    'Here You Can Enter TITLE Your Task',
    'Here You Can Enter DESCRIPTION Your Task',
    'CLICK to ADD Your Task',
    'Click Here to Move This Task to Tasks In Progress',
    'Click Here to Move This Task Back to Tasks To Do',
    'Click Here to DELETE This Task',
    'Click Here to Move This Task Forward to Tasks Completed',
    'Here is Your NAME, you can Change your Name in Settings',
    'Click Here to Read Simple Instructions About Pages on This App',
    'Click Here And Type Phrase to Find Your Task Quickly',
    'Thank You For Using Tutorial And Have Fun!',
  ];
  const { startTutorial, setStartTutorial, setTasksToDo, setTasksInProgress, tasksToDo, tasksInProgress } =
    useContext(ToDoAppContext);
  const durationAnimation = 20;
  const navigate = useNavigate();
  const timeout = (number) => {
    return durationAnimation * 1000 * 0.08 * number + 100;
  };

  useEffect(() => {
    if (startTutorial) {
      navigate('/');
      if (tasksToDo.length < 1) {
        setTasksToDo([...tasksToDo, tasks[0]]);
        setTasksInProgress([...tasksInProgress, tasks[1]]);
      }
      for (let i = 0; i < 13; i++) {
        setTimeout(() => {
          setTextTutorial(texts[i]);
          if (i === 12) setEndTutorial(true);
        }, timeout(i));
      }
    }
    // eslint-disable-next-line
  }, [startTutorial, navigate, setTasksToDo, setTasksInProgress]);

  const handleClose = () => {
    setStartTutorial(false);
    setEndTutorial(false);
  };

  return (
    <ContainerCenter>
      {endTutorial && (
        <Modal handleClose={handleClose}>
          <ModalChildren>
            <h2>{textTutorial}</h2>
          </ModalChildren>
        </Modal>
      )}
      <ContainerApp>
        <SideMenuBar setThemeState={setThemeState} />
        {children}
        {startTutorial && <TutorialElement dur={durationAnimation}></TutorialElement>}
        {startTutorial && <TutorialElement2 dur={durationAnimation}>{textTutorial}</TutorialElement2>}
      </ContainerApp>
    </ContainerCenter>
  );
};

export default MainContainerApp;
