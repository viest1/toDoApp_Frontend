import React, { useContext, useEffect, useState } from 'react';
import NoteInput from '../../molecules/NoteInput/NoteInput';
import Note from '../../molecules/Note/Note';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';
import { ContainerSearchBarInput, ContainerNotes } from './NotesContent.styles';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';

const NotesContent = () => {
  const { notes, setNotes } = useContext(ToDoAppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchNotes, setSearchNotes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleOpen = () => {
    console.log('clicked');
    setIsOpen(true);
  };

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem('notes'));
    storageNotes !== null && setNotes(storageNotes);
  }, [setNotes]);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSearch = (e) => {
    if (e.target.value) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    setSearchNotes(
      sortByTimestamp(
        notes.filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
  };

  return (
    <div>
      <ContainerSearchBarInput>
        {isOpen ? (
          <div>
            <NoteInput setIsOpen={setIsOpen} />
          </div>
        ) : (
          <div>
            <InputSubmit value="Add Note" onClick={handleOpen} setWidth="100px" />
          </div>
        )}
        <div>
          <SearchBar handleSearch={handleSearch} isFlexEnd />
        </div>
      </ContainerSearchBarInput>
      {isSearching ? (
        <ContainerNotes>
          {searchNotes.map((item) => (
            <Note
              data={item}
              key={item.id}
              notes={searchNotes}
              setNotes={setNotes}
              setSearchNotes={setSearchNotes}
              notesReal={notes}
            />
          ))}
        </ContainerNotes>
      ) : (
        <ContainerNotes>
          {notes.map((item) => (
            <Note data={item} key={item.id} notes={notes} setNotes={setNotes} />
          ))}
        </ContainerNotes>
      )}
    </div>
  );
};

export default NotesContent;
