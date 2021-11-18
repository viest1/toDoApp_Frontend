import React, { useContext, useState } from 'react';
import { Container, LabelStyled, TextareaStyled, InputTitle, IconClose } from './NoteInput.styles';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import { v4 as uuidv4 } from 'uuid';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';

const NoteInput = ({ setIsOpen }) => {
  const { note, setNote, notes, setNotes } = useContext(ToDoAppContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes(sortByTimestamp([...notes, note]));
    setNote({ id: '', title: '', description: '', date: '', timestamp: 0 });
    e.target.reset();
    setIsSubmitted(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <IconClose onClick={handleClose} style={{ cursor: 'pointer' }} />
      <LabelStyled htmlFor="titleNote">Enter Your Note</LabelStyled>
      <InputTitle
        type="text"
        id="titleNote"
        name="titleNote"
        placeholder="Title"
        onChange={(e) => {
          setNote({
            ...note,
            id: uuidv4(),
            title: e.target.value,
            date: new Date().toLocaleDateString(),
            timestamp: Date.now(),
          });
          setIsSubmitted(false);
        }}
        required
      />
      <TextareaStyled
        name="textNote"
        id="textNote"
        cols="30"
        rows="10"
        placeholder="Note Text"
        onChange={(e) => setNote({ ...note, description: e.target.value })}
      />
      <InputSubmit value="Save Note" />
      {isSubmitted && <h3>Note Added Correctly</h3>}
    </Container>
  );
};

export default NoteInput;
