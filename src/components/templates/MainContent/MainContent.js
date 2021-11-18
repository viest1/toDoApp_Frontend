import React from 'react';
import Header from '../../organisms/Header/Header';
import Content from '../../organisms/Content/Content';
import { Container } from './MainContent.styles';

const MainContent = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default MainContent;
