import React, { useEffect, useState } from 'react';
import { MdOutlineColorLens } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import Modal from '../../organisms/Modal/Modal';
import { Container, InputTitle, LabelStyled, TextareaStyled } from '../NoteInput/NoteInput.styles';
import {
  ContainerNote,
  ContainerIconHeader,
  ContainerIconsFooter,
  IconsFooter,
  IconsHeader,
  PDate,
  StyledH3,
  ColorizedRibbon,
  NoteDescription,
} from './Note.styles';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';

const pointer = { cursor: 'pointer' };

const Note = ({
  data: { title, description, id, date, timestamp },
  notes,
  setNotes,
  setSearchNotes,
  notesReal,
}) => {
  const [editNote, setEditNote] = useState({ id: '', title: '', description: '', date: '', timestamp: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [positionStatic, setPositionStatic] = useState(false);
  const handleDelete = (id) => {
    if (notesReal) {
      setNotes(notesReal.filter((item) => item.id !== id));
      setSearchNotes(notes.filter((item) => item.id !== id));
    } else {
      setNotes(notes.filter((item) => item.id !== id));
    }
  };
  const handleEdit = () => {
    setPositionStatic(true);
    setIsOpen(true);
    setEditNote({ id, title, description, date, timestamp });
  };
  const handleClose = () => {
    setPositionStatic(false);
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (notesReal) {
      setNotes(sortByTimestamp([editNote, ...notesReal.filter((item) => item.id !== id)]));
      setSearchNotes(sortByTimestamp([editNote, ...notes.filter((item) => item.id !== id)]));
    } else {
      setNotes(sortByTimestamp([editNote, ...notes.filter((item) => item.id !== id)]));
    }

    setIsSubmitted(true);
  };
  const handleChangeColor = () => {
    if (counter < 3) {
      setCounter((previous) => previous + 1);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    setCounter(+localStorage.getItem(id));
  }, [id]);

  useEffect(() => {
    localStorage.setItem(id, counter.toString());
  }, [counter, id]);

  return (
    <ContainerNote positionStatic={positionStatic}>
      <ContainerIconHeader>
        <IconsHeader>
          <BiEdit onClick={handleEdit} style={pointer} />
          <MdOutlineColorLens onClick={handleChangeColor} style={pointer} />
          <ColorizedRibbon counter={counter}></ColorizedRibbon>
        </IconsHeader>
      </ContainerIconHeader>
      {isOpen && (
        <div>
          <Modal handleClose={handleClose}>
            {notes.length && (
              <div>
                <Container onSubmit={handleSubmit} style={{ padding: '0.2rem 1rem 0.5rem 1rem' }}>
                  <LabelStyled htmlFor="titleNote">Edit Your Note</LabelStyled>
                  <InputTitle
                    type="text"
                    id="titleNote"
                    name="titleNote"
                    placeholder="Title"
                    value={editNote.title}
                    onChange={(e) => {
                      setEditNote({ ...editNote, title: e.target.value });
                    }}
                    required
                  />
                  <TextareaStyled
                    name="textNote"
                    id="textNote"
                    cols="30"
                    rows="10"
                    placeholder="Note Text"
                    value={editNote.description}
                    onChange={(e) => {
                      setEditNote({ ...editNote, description: e.target.value });
                    }}
                  />
                  <InputSubmit value="Save Note" />
                  {isSubmitted && <h3>Note Edited Correctly</h3>}
                </Container>
              </div>
            )}
          </Modal>
        </div>
      )}
      <div>
        <StyledH3>{title}</StyledH3>
        <NoteDescription>{description}</NoteDescription>
      </div>
      <ContainerIconsFooter>
        <IconsFooter>
          <BsCalendarDate />
          <PDate>{date}</PDate>
        </IconsFooter>
        <IconsFooter>
          <MdDelete onClick={() => handleDelete(id)} style={pointer} />
        </IconsFooter>
      </ContainerIconsFooter>
    </ContainerNote>
  );
};

export default Note;
