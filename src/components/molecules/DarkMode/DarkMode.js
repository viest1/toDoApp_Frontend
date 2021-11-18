import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../hooks/useDarkMode';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './DarkMode.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const DarkMode = ({ setThemeState }) => {
  const [darkMode, setDarkMode] = useDarkMode(setThemeState, 'dark-mode-enabled');
  return (
    <Container>
      <label></label>
      <Toggle
        onChange={(e) => setDarkMode(e.target.checked)}
        defaultChecked={darkMode}
        className="custom-classname"
      />
    </Container>
  );
};

export default DarkMode;
