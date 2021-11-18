import React, { useContext } from 'react';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import FormLabelAndInput from '../../atoms/FormLabelAndInput/FormLabelAndInput';
import { v4 as uuidv4 } from 'uuid';

const AddExampleData = () => {
  const { addExampleData, setIsAddExampleData } = useContext(ToDoAppContext);

  const handleInput = (e) => {
    setIsAddExampleData(e.target.checked);
    if (!e.target.checked) {
      addExampleData({
        exampleTasksToDo: [],
        exampleTasksInProgress: [],
        exampleTasksCompleted: [],
        exampleNotes: [],
      });
    } else {
      addExampleData({
        exampleTasksToDo: [
          {
            title: 'Settings',
            description: 'Reset Tasks, Notes, Whole App',
            progress: 'To Do',
            id: uuidv4(),
            timestamp: Date.now() + 1,
          },
          {
            title: 'Mini Game',
            description: 'Save Results',
            progress: 'To Do',
            id: uuidv4(),
            timestamp: Date.now() + 2,
          },
          {
            title: 'App',
            description: 'Refactoring',
            progress: 'To Do',
            id: uuidv4(),
            timestamp: Date.now() + 3,
          },
        ],
        exampleTasksInProgress: [
          {
            title: 'Settings',
            description: 'Finish Page: Settings',
            progress: 'In Progress',
            id: uuidv4(),
            timestamp: Date.now() + 4,
          },
          {
            title: 'Dashboard',
            description: 'Finish Page: Dashboard',
            progress: 'In Progress',
            id: uuidv4(),
            timestamp: Date.now() + 5,
          },
          {
            title: 'Mini Game',
            description: 'Finish Page: Mini Game',
            progress: 'In Progress',
            id: uuidv4(),
            timestamp: Date.now() + 6,
          },
        ],
        exampleTasksCompleted: [
          {
            title: 'Dashboard',
            description: 'Edit Tasks',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 7,
          },
          {
            title: 'Notes',
            description: 'Finish Page: Notes',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 8,
          },
          {
            title: 'Notes',
            description: 'Change Color in Corner',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 9,
          },
          {
            title: 'Settings',
            description: 'Avatar',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 10,
          },
          {
            title: 'Search',
            description: 'Logic Searching',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 11,
          },
          {
            title: 'Dashboard',
            description: 'Question Mark',
            progress: 'Completed',
            id: uuidv4(),
            timestamp: Date.now() + 12,
          },
        ],
        exampleNotes: [
          {
            title: 'Project To Do App - Date',
            description: 'Finish Date - 20.11.2021',
            date: '8.11.2021',
            id: uuidv4(),
            timestamp: Date.now() + 13,
          },
          {
            title: 'Ideas To Do App - New Pages',
            description: 'Calculator, Work Timer',
            date: '9.11.2021',
            id: uuidv4(),
            timestamp: Date.now() + 14,
          },
          {
            title: 'Deployment To Do App',
            description: 'Netlify, Heroku, Vercel?',
            date: '10.11.2021',
            id: uuidv4(),
            timestamp: Date.now() + 15,
          },
        ],
      });
    }
  };

  return (
    <div>
      <FormLabelAndInput
        is2Columns
        type="checkbox"
        required={false}
        id="addExampleData"
        label="Add Example Data"
        handleInput={handleInput}
      />
    </div>
  );
};

export default AddExampleData;
