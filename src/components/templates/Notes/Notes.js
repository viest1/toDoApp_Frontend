import React from 'react';
import NotesContent from '../../organisms/NotesContent/NotesContent';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  height: 700px;
  overflow: auto;
`;

const Notes = () => {
  return (
    <Container>
      <NotesContent />
    </Container>
  );
};

export default Notes;
