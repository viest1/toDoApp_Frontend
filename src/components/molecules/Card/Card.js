import React from 'react';
import Task from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  InputTitle,
  Button,
  ContainerNumberTasks,
  ContainerTasks,
  ContainerTitleNumber,
  TitleCard,
} from './Card.styles';

const Card = ({
  dataToTestId,
  handleDescription,
  title,
  handleTask,
  task,
  setTask,
  tasks,
  inputRef,
  handleDelete,
  handleForward,
  handleBack,
  textNoTasks,
  setTasks,
  realTasks,
  setRealTasks,
}) => {
  return (
    <Container>
      <ContainerTitleNumber>
        <TitleCard>{title}</TitleCard>
        <ContainerNumberTasks>
          <span>{tasks.length}</span>
        </ContainerNumberTasks>
      </ContainerTitleNumber>
      <form onSubmit={handleTask}>
        <InputTitle
          ref={inputRef}
          type="text"
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), title: e.target.value, progress: title, timestamp: Date.now() })
          }
          name="title"
          required
          placeholder="Enter Your Task"
          data-testid={dataToTestId}
        />
        <InputTitle
          type="text"
          onChange={handleDescription}
          name="description"
          placeholder="Enter Your Description"
        />
        <Button type="submit">+</Button>
      </form>
      <ContainerTasks>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              realTasks={realTasks}
              setRealTasks={setRealTasks}
              handleForward={handleForward}
              handleBack={handleBack}
              handleDelete={handleDelete}
              progress={title}
              id={task.id}
              key={task.id}
              title={task.title}
              description={task.description}
              timestamp={task.timestamp}
            />
          ))
        ) : (
          <h3>{textNoTasks}</h3>
        )}
      </ContainerTasks>
    </Container>
  );
};

export default Card;
