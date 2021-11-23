import React, { useState, createContext } from 'react';
import faceIcon from 'assets/icons/icon-face.png';
import { useAuth } from 'hooks/useAuth';

export const ToDoAppContext = createContext({
  tasksToDo: [],
  setTasksToDo: () => {},
  task: {},
  setTask: () => {},
  tasksInProgress: [],
  setTasksInProgress: () => {},
  tasksCompleted: [],
  setTasksCompleted: () => {},
  name: '',
  setName: () => {},
  notes: [],
  setNotes: () => {},
  note: {},
  setNote: () => {},
  avatarSrc: '',
  setAvatarSrc: () => {},
  avatarSrcHeader: '',
  setAvatarSrcHeader: () => {},
  searchTasksToDo: [],
  setSearchTasksToDo: () => {},
  searchTasksInProgress: [],
  setSearchTasksInProgress: () => {},
  searchTasksCompleted: [],
  setSearchTasksCompleted: () => {},
  isSearchingTasks: false,
  setIsSearchingTasks: () => {},
  checkboxes: {},
  setCheckboxes: () => {},
  exampleData: {},
  addExampleData: () => {},
  isAddExampleData: false,
  setIsAddExampleData: () => {},
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  logoutTime: null,
  startTutorial: false,
  setStartTutorial: () => {},
});

const GeneralProvider = ({ children }) => {
  const [tasksToDo, setTasksToDo] = useState([]);
  const [task, setTask] = useState({ id: '', title: '', progress: '', description: '' });
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  const [name, setName] = useState('Patryk Lisowski');
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ id: '', title: '', description: '', date: '', timestamp: 0 });
  const [avatarSrc, setAvatarSrc] = useState(faceIcon);
  const [avatarSrcHeader, setAvatarSrcHeader] = useState(faceIcon);
  const [searchTasksToDo, setSearchTasksToDo] = useState([]);
  const [searchTasksInProgress, setSearchTasksInProgress] = useState([]);
  const [searchTasksCompleted, setSearchTasksCompleted] = useState([]);
  const [isSearchingTasks, setIsSearchingTasks] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    resetTasksToDo: false,
    resetTasksInProgress: false,
    resetTasksCompleted: false,
    resetNotes: false,
  });
  const [exampleData, addExampleData] = useState({
    exampleTasksToDo: [],
    exampleTasksInProgress: [],
    exampleTasksCompleted: [],
    exampleNotes: [],
  });
  const [isAddExampleData, setIsAddExampleData] = useState(false);
  const { token, login, logout, userId, logoutTime } = useAuth();
  const [startTutorial, setStartTutorial] = useState(false);

  return (
    <ToDoAppContext.Provider
      value={{
        tasksToDo,
        setTasksToDo,
        task,
        setTask,
        tasksInProgress,
        setTasksInProgress,
        tasksCompleted,
        setTasksCompleted,
        name,
        setName,
        notes,
        setNotes,
        note,
        setNote,
        avatarSrc,
        setAvatarSrc,
        avatarSrcHeader,
        setAvatarSrcHeader,
        searchTasksToDo,
        setSearchTasksToDo,
        searchTasksInProgress,
        setSearchTasksInProgress,
        searchTasksCompleted,
        setSearchTasksCompleted,
        isSearchingTasks,
        setIsSearchingTasks,
        checkboxes,
        setCheckboxes,
        exampleData,
        addExampleData,
        isAddExampleData,
        setIsAddExampleData,
        token,
        login,
        logout,
        userId,
        isLoggedIn: !!token,
        logoutTime,
        startTutorial,
        setStartTutorial,
      }}
    >
      {children}
    </ToDoAppContext.Provider>
  );
};

export default GeneralProvider;
