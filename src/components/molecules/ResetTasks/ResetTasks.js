import React, { useContext } from 'react';
import FormLabelAndInput from '../../atoms/FormLabelAndInput/FormLabelAndInput';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import { Container } from './ResetTasks.styles';

const ResetTasks = () => {
  const { checkboxes, setCheckboxes } = useContext(ToDoAppContext);

  const handleInput = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  return (
    <Container>
      <FormLabelAndInput
        is2Columns
        type="checkbox"
        required={false}
        id="resetTasksToDo"
        label="Reset Tasks To Do"
        handleInput={handleInput}
      />
      <FormLabelAndInput
        is2Columns
        type="checkbox"
        required={false}
        id="resetTasksInProgress"
        label="Reset Tasks In Progress"
        handleInput={handleInput}
      />
      <FormLabelAndInput
        is2Columns
        type="checkbox"
        required={false}
        id="resetTasksCompleted"
        label="Reset Tasks Completed"
        handleInput={handleInput}
      />
      <FormLabelAndInput
        is2Columns
        type="checkbox"
        required={false}
        id="resetNotes"
        label="Reset Notes"
        handleInput={handleInput}
      />
    </Container>
  );
};

export default ResetTasks;
