import React, { useRef, useEffect, useContext } from 'react';
import Card from '../../molecules/Card/Card';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import { Container } from './Cards.styles';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';

const Cards = () => {
  const {
    setTasksToDo,
    tasksToDo,
    task,
    setTask,
    tasksInProgress,
    setTasksInProgress,
    tasksCompleted,
    setTasksCompleted,
    isSearchingTasks,
    searchTasksToDo,
    searchTasksInProgress,
    searchTasksCompleted,
    setSearchTasksToDo,
    setSearchTasksInProgress,
    setSearchTasksCompleted,
  } = useContext(ToDoAppContext);
  const handleTask = (e) => {
    e.preventDefault();
    if (task.title.length > 0) {
      task.progress === 'To Do'
        ? setTasksToDo([...tasksToDo, task])
        : task.progress === 'In Progress'
        ? setTasksInProgress([...tasksInProgress, task])
        : setTasksCompleted([...tasksCompleted, task]);
    }
    setTask({ id: '', title: '', progress: '', description: '', timestamp: 0 });
    e.target.reset();
  };

  const handleDescription = (e) => {
    setTask({ ...task, description: e.target.value });
  };
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [tasksToDo]);

  useEffect(() => {
    const storageTasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
    const storageTasksInProgress = JSON.parse(localStorage.getItem('tasksInProgress'));
    const storageTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));
    storageTasksToDo !== null && setTasksToDo(storageTasksToDo);
    storageTasksInProgress !== null && setTasksInProgress(storageTasksInProgress);
    storageTasksCompleted !== null && setTasksCompleted(storageTasksCompleted);
  }, [setTasksToDo, setTasksInProgress, setTasksCompleted]);

  useEffect(() => {
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  }, [tasksToDo]);
  useEffect(() => {
    localStorage.setItem('tasksInProgress', JSON.stringify(tasksInProgress));
  }, [tasksInProgress]);
  useEffect(() => {
    localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
  }, [tasksCompleted]);

  const handleDelete = (id, progress) => {
    if (isSearchingTasks) {
      progress === 'To Do'
        ? setSearchTasksToDo(searchTasksToDo.filter((item) => item.id !== id))
        : progress === 'In Progress'
        ? setSearchTasksInProgress(searchTasksInProgress.filter((item) => item.id !== id))
        : setSearchTasksCompleted(searchTasksCompleted.filter((item) => item.id !== id));
    }
    progress === 'To Do'
      ? setTasksToDo(tasksToDo.filter((item) => item.id !== id))
      : progress === 'In Progress'
      ? setTasksInProgress(tasksInProgress.filter((item) => item.id !== id))
      : setTasksCompleted(tasksCompleted.filter((item) => item.id !== id));
  };

  const handleForward = (t) => {
    if (t.progress === 'To Do') {
      t.progress = 'In Progress';
      if (isSearchingTasks) {
        setSearchTasksInProgress(sortByTimestamp([t, ...searchTasksInProgress]));
        setSearchTasksToDo(searchTasksToDo.filter((item) => item.id !== t.id));
      }
      setTasksInProgress(sortByTimestamp([t, ...tasksInProgress]));
      setTasksToDo(tasksToDo.filter((item) => item.id !== t.id));
    } else if (t.progress === 'In Progress') {
      t.progress = 'Completed';
      if (isSearchingTasks) {
        setSearchTasksCompleted(sortByTimestamp([t, ...searchTasksCompleted]));
        setSearchTasksInProgress(searchTasksInProgress.filter((item) => item.id !== t.id));
      }
      setTasksCompleted(sortByTimestamp([t, ...tasksCompleted]));
      setTasksInProgress(tasksInProgress.filter((item) => item.id !== t.id));
    }
  };

  const handleBack = (t) => {
    if (t.progress === 'Completed') {
      t.progress = 'In Progress';
      if (isSearchingTasks) {
        setSearchTasksInProgress(sortByTimestamp([t, ...searchTasksInProgress]));
        setSearchTasksCompleted(searchTasksCompleted.filter((item) => item.id !== t.id));
      }
      setTasksInProgress(sortByTimestamp([t, ...tasksInProgress]));
      setTasksCompleted(tasksCompleted.filter((item) => item.id !== t.id));
    } else if (t.progress === 'In Progress') {
      t.progress = 'To Do';
      if (isSearchingTasks) {
        setSearchTasksToDo(sortByTimestamp([t, ...searchTasksToDo]));
        setSearchTasksInProgress(searchTasksInProgress.filter((item) => item.id !== t.id));
      }
      setTasksToDo(sortByTimestamp([t, ...tasksToDo]));
      setTasksInProgress(tasksInProgress.filter((item) => item.id !== t.id));
    }
  };

  return (
    <div>
      {isSearchingTasks ? (
        <Container>
          <Card
            title="To Do"
            handleForward={handleForward}
            tasks={searchTasksToDo}
            setTasks={setSearchTasksToDo}
            realTasks={tasksToDo}
            setRealTasks={setTasksToDo}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            inputRef={inputRef}
            handleDelete={handleDelete}
            handleDescription={handleDescription}
            textNoTasks="No Tasks To Do"
            dataToTestId="inputTest"
          />
          <Card
            title="In Progress"
            handleForward={handleForward}
            tasks={searchTasksInProgress}
            setTasks={setSearchTasksInProgress}
            realTasks={tasksInProgress}
            setRealTasks={setTasksInProgress}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            handleDelete={handleDelete}
            handleDescription={handleDescription}
            handleBack={handleBack}
            textNoTasks="No Tasks In Progress"
          />
          <Card
            handleDescription={handleDescription}
            handleBack={handleBack}
            title="Completed"
            textNoTasks="No Tasks Completed"
            tasks={searchTasksCompleted}
            setTasks={setSearchTasksCompleted}
            realTasks={tasksCompleted}
            setRealTasks={setTasksCompleted}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            handleDelete={handleDelete}
          />
        </Container>
      ) : (
        <Container>
          <Card
            title="To Do"
            handleForward={handleForward}
            tasks={tasksToDo}
            setTasks={setTasksToDo}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            inputRef={inputRef}
            handleDelete={handleDelete}
            handleDescription={handleDescription}
            textNoTasks="No Tasks To Do"
            dataToTestId="inputTest"
          />
          <Card
            title="In Progress"
            handleForward={handleForward}
            tasks={tasksInProgress}
            setTasks={setTasksInProgress}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            handleDelete={handleDelete}
            handleDescription={handleDescription}
            handleBack={handleBack}
            textNoTasks="No Tasks In Progress"
          />
          <Card
            handleDescription={handleDescription}
            handleBack={handleBack}
            title="Completed"
            textNoTasks="No Tasks Completed"
            tasks={tasksCompleted}
            setTasks={setTasksCompleted}
            task={task}
            setTask={setTask}
            handleTask={handleTask}
            handleDelete={handleDelete}
          />
        </Container>
      )}
    </div>
  );
};

export default Cards;
