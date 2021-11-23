import React, { useContext, useState } from 'react';
import ChangeName from '../../molecules/ChangeName/ChangeName';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import ChangeAvatar from '../../molecules/ChangeAvatar/ChangeAvatar';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';
import ResetTasks from '../../molecules/ResetTasks/ResetTasks';
import AddExampleData from '../../molecules/AddExampleData/AddExampleData';
import { ContainerForm } from './SettingsContent.styles';

const SettingsContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    setName,
    avatarSrc,
    setAvatarSrcHeader,
    checkboxes,
    setTasksToDo,
    setTasksInProgress,
    setTasksCompleted,
    setNotes,
    exampleData,
    isAddExampleData,
    setIsAddExampleData,
    userId,
  } = useContext(ToDoAppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Name
    const inputName = e.target.name.value;
    const setNameDb = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/setname', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, name: inputName }),
      });
      const jsonResponse = await response.json();
      await setName(jsonResponse.name);
    };

    if (inputName && userId) {
      try {
        setNameDb();
      } catch (e) {
        console.log(e);
      }
    }

    // Handle Avatar
    setAvatarSrcHeader(avatarSrc);
    localStorage.setItem('avatar', avatarSrc);

    // Handle Resets
    if (checkboxes.resetTasksToDo) {
      setTasksToDo([]);
      localStorage.removeItem('tasksToDo');
    }
    if (checkboxes.resetTasksInProgress) {
      setTasksInProgress([]);
      localStorage.removeItem('tasksInProgress');
    }
    if (checkboxes.resetTasksCompleted) {
      setTasksCompleted([]);
      localStorage.removeItem('tasksCompleted');
    }
    if (checkboxes.resetNotes) {
      setNotes([]);
      localStorage.removeItem('notes');
    }

    // Handle Add Example Data
    if (isAddExampleData) {
      const storageTasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
      const storageTasksInProgress = JSON.parse(localStorage.getItem('tasksInProgress'));
      const storageTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));
      const storageNotes = JSON.parse(localStorage.getItem('notes'));
      storageTasksToDo
        ? localStorage.setItem('tasksToDo', JSON.stringify([...storageTasksToDo, ...exampleData.exampleTasksToDo]))
        : localStorage.setItem('tasksToDo', JSON.stringify([...exampleData.exampleTasksToDo]));
      storageTasksInProgress
        ? localStorage.setItem(
            'tasksInProgress',
            JSON.stringify([...storageTasksInProgress, ...exampleData.exampleTasksInProgress])
          )
        : localStorage.setItem('tasksInProgress', JSON.stringify([...exampleData.exampleTasksInProgress]));
      storageTasksCompleted
        ? localStorage.setItem(
            'tasksCompleted',
            JSON.stringify([...storageTasksCompleted, ...exampleData.exampleTasksCompleted])
          )
        : localStorage.setItem('tasksCompleted', JSON.stringify([...exampleData.exampleTasksCompleted]));
      storageNotes
        ? localStorage.setItem('notes', JSON.stringify([...storageNotes, ...exampleData.exampleNotes]))
        : localStorage.setItem('notes', JSON.stringify([...exampleData.exampleNotes]));
      setIsAddExampleData(false);
    }
    e.target.reset();
    setIsSubmitted(true);
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ChangeName />
      <ChangeAvatar />
      <ResetTasks />
      <AddExampleData />
      <InputSubmit value="Save Changes" />
      {isSubmitted && <h3>Changes are Saved</h3>}
    </ContainerForm>
  );
};

export default SettingsContent;
