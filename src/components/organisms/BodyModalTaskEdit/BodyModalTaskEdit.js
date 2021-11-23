import React, { useEffect, useState } from 'react';
import { Container, InputTitle, LabelStyled, TextareaStyled } from '../../molecules/NoteInput/NoteInput.styles';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';

const BodyModalTaskEdit = ({
  realTasks,
  setRealTasks,
  editTask,
  title,
  description,
  isSubmitted,
  setIsSubmitted,
  setTasks,
  tasks,
}) => {
  const [editTaskUpdated, setEditTaskUpdated] = useState(editTask);
  const [editTaskTitle, setEditTaskTitle] = useState(title);
  const [editTaskDescription, setEditTaskDescription] = useState(description);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (realTasks) {
      setRealTasks(
        sortByTimestamp([editTaskUpdated, ...realTasks.filter((item) => item.id !== editTaskUpdated.id)])
      );
    }
    setTasks(sortByTimestamp([editTaskUpdated, ...tasks.filter((item) => item.id !== editTaskUpdated.id)]));
    setIsSubmitted(true);
  };

  useEffect(() => {
    setEditTaskUpdated({ ...editTaskUpdated, title: editTaskTitle, description: editTaskDescription });
    // eslint-disable-next-line
  }, [editTaskTitle, editTaskDescription]);

  return (
    <Container onSubmit={handleSubmit} style={{ padding: '0.2rem 1rem 0.5rem 1rem' }}>
      <LabelStyled htmlFor="titleNote">Edit Your Task</LabelStyled>
      <InputTitle
        type="text"
        id="titleNote"
        name="titleNote"
        placeholder="Title"
        value={editTaskTitle}
        onChange={(e) => setEditTaskTitle(e.target.value)}
        required
      />
      <TextareaStyled
        name="textNote"
        id="textNote"
        cols="30"
        rows="10"
        placeholder="Note Text"
        value={editTaskDescription}
        onChange={(e) => setEditTaskDescription(e.target.value)}
      />
      <InputSubmit value="Save Task" />
      {isSubmitted && <h3>Note Edited Correctly</h3>}
    </Container>
  );
};

export default BodyModalTaskEdit;
