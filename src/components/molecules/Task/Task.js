import React, { useState } from 'react';
import dot from 'assets/icons/dot.png';
import { AiOutlineBackward } from 'react-icons/ai';
import { AiOutlineForward } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { ContainerTask, ContainerIconP, ContainerIcons, TaskTitle, TaskDescription } from './Task.styles';
import Modal from '../../organisms/Modal/Modal';
import BodyModalTaskEdit from '../../organisms/BodyModalTaskEdit/BodyModalTaskEdit';

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
  const pointer = { cursor: 'pointer' };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleEdit = () => {
    setIsOpen(true);
    setEditTask({ id, title, description, progress, timestamp });
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

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
        <Modal handleClose={handleClose}>
          {tasks.length && (
            <BodyModalTaskEdit
              title={title}
              description={description}
              editTask={editTask}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              setTasks={setTasks}
              realTasks={realTasks}
              setRealTasks={setRealTasks}
              tasks={tasks}
            />
          )}
        </Modal>
      )}
    </ContainerTask>
  );
};

export default Task;
