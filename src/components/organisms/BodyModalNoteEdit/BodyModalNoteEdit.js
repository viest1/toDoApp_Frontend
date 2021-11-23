import React, { useEffect, useState } from 'react';
import { Container, InputTitle, LabelStyled, TextareaStyled } from '../../molecules/NoteInput/NoteInput.styles';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';

const BodyModalNoteEdit = ({
  isSubmitted,
  editNote,
  notes,
  setNotes,
  notesReal,
  setIsSubmitted,
  setSearchNotes,
  title,
  description,
}) => {
  const [editNoteModal, setEditNoteModal] = useState(editNote);
  const [titleEdit, setTitleEdit] = useState(title);
  const [descriptionEdit, setDescriptionEdit] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notesReal) {
      setNotes(sortByTimestamp([editNoteModal, ...notesReal.filter((item) => item.id !== editNoteModal.id)]));
      setSearchNotes(sortByTimestamp([editNoteModal, ...notes.filter((item) => item.id !== editNoteModal.id)]));
    } else {
      setNotes(sortByTimestamp([editNoteModal, ...notes.filter((item) => item.id !== editNoteModal.id)]));
    }

    setIsSubmitted(true);
  };

  useEffect(() => {
    setEditNoteModal({ ...editNoteModal, title: titleEdit, description: descriptionEdit });
    // eslint-disable-next-line
  }, [titleEdit, descriptionEdit]);

  return (
    <Container onSubmit={handleSubmit} style={{ padding: '0.2rem 1rem 0.5rem 1rem' }}>
      <LabelStyled htmlFor="titleNote">Edit Your Note</LabelStyled>
      <InputTitle
        type="text"
        id="titleNote"
        name="titleNote"
        placeholder="Title"
        value={titleEdit}
        onChange={(e) => setTitleEdit(e.target.value)}
        required
      />
      <TextareaStyled
        name="textNote"
        id="textNote"
        cols="30"
        rows="10"
        placeholder="Note Text"
        value={descriptionEdit}
        onChange={(e) => setDescriptionEdit(e.target.value)}
      />
      <InputSubmit value="Save Note" />
      {isSubmitted && <h3>Note Edited Correctly</h3>}
    </Container>
  );
};

export default BodyModalNoteEdit;
