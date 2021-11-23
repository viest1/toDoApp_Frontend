import React, { useEffect, useState } from 'react';
import { MdOutlineColorLens } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import Modal from '../../organisms/Modal/Modal';
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
import BodyModalNoteEdit from '../../organisms/BodyModalNoteEdit/BodyModalNoteEdit';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        <Modal handleClose={handleClose}>
          {notes.length && (
            <BodyModalNoteEdit
              editNoteTitle={editNote.title}
              editNoteDescription={editNote.description}
              editNote={editNote}
              setEditNote={setEditNote}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              notes={notes}
              setNotes={setNotes}
              setSearchNotes={setSearchNotes}
              notesReal={notesReal}
              title={title}
              description={description}
            />
          )}
        </Modal>
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
