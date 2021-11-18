import React, { useState } from 'react';
import dot from 'assets/icons/dot.png';
import { AiOutlineBackward } from 'react-icons/ai';
import { AiOutlineForward } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { ContainerTask, ContainerIconP, ContainerIcons, TaskTitle, TaskDescription } from './Task.styles';
import Modal from '../../organisms/Modal/Modal';
import { Container, InputTitle, LabelStyled, TextareaStyled } from '../NoteInput/NoteInput.styles';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';

const Task = ({
  title,
  progress,
  id,
  handleDelete,
  task,
  handleForward,
  handleBack,
  description,
  timestamp,
  tasks,
  setTasks,
  realTasks,
  setRealTasks,
}) => {
  const [editTask, setEditTask] = useState({ id: '', title: '', description: '', timestamp: 0, progress: '' });
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    setIsOpen(true);
    setEditTask({ id, title, description, progress, timestamp });
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (realTasks) {
      setRealTasks(sortByTimestamp([editTask, ...realTasks.filter((item) => item.id !== id)]));
    }
    setTasks(sortByTimestamp([editTask, ...tasks.filter((item) => item.id !== id)]));
    setIsSubmitted(true);
  };

  const pointer = { cursor: 'pointer' };

  return (
    <ContainerTask>
      <ContainerIconP>
        <img src={dot} alt="dot" />
        <TaskTitle>{title}</TaskTitle>
        <BiEdit onClick={handleEdit} style={pointer} />
      </ContainerIconP>
      <TaskDescription>{description}</TaskDescription>
      {progress === 'To Do' ? (
        <ContainerIcons>
          <AiOutlineForward onClick={() => handleForward(task)} style={pointer} />
          <MdDelete onClick={() => handleDelete(id, progress)} style={pointer} />
        </ContainerIcons>
      ) : progress === 'In Progress' ? (
        <ContainerIcons>
          <AiOutlineBackward onClick={() => handleBack(task)} style={pointer} />
          <MdDelete onClick={() => handleDelete(id, progress)} style={pointer} />
          <AiOutlineForward task={task} onClick={() => handleForward(task)} style={pointer} />
        </ContainerIcons>
      ) : (
        <ContainerIcons>
          <AiOutlineBackward onClick={() => handleBack(task)} style={pointer} />
          <MdDelete onClick={() => handleDelete(id, progress)} style={pointer} />
        </ContainerIcons>
      )}
      {isOpen && (
        <div>
          <Modal handleClose={handleClose}>
            {tasks.length && (
              <div>
                <Container onSubmit={handleSubmit} style={{ padding: '0.2rem 1rem 0.5rem 1rem' }}>
                  <LabelStyled htmlFor="titleNote">Edit Your Task</LabelStyled>
                  <InputTitle
                    type="text"
                    id="titleNote"
                    name="titleNote"
                    placeholder="Title"
                    value={editTask.title}
                    onChange={(e) => {
                      setEditTask({ ...editTask, title: e.target.value });
                    }}
                    required
                  />
                  <TextareaStyled
                    name="textNote"
                    id="textNote"
                    cols="30"
                    rows="10"
                    placeholder="Note Text"
                    value={editTask.description}
                    onChange={(e) => {
                      setEditTask({ ...editTask, description: e.target.value });
                    }}
                  />
                  <InputSubmit value="Save Task" />
                  {isSubmitted && <h3>Note Edited Correctly</h3>}
                </Container>
              </div>
            )}
          </Modal>
        </div>
      )}
    </ContainerTask>
  );
};

export default Task;
