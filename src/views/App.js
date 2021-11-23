import { ThemeProvider } from 'styled-components';
import MainContent from '../components/templates/MainContent/MainContent';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from '../components/templates/Notes/Notes';
import Settings from '../components/templates/Settings/Settings';
import MainContainerApp from '../components/templates/MainContainerApp/MainContainerApp';
import { ToDoAppContext } from '../providers/GeneralProvider';
import { theme, darkTheme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import MiniGame from '../components/templates/MiniGame/MiniGame';
import { settingsDarkMode } from '../hooks/useDarkMode';
import Calculator from '../components/templates/Calculator/Calculator';
import FormAuth from '../components/templates/FormAuth/FormAuth';
import Chat from '../components/templates/Chat/Chat';

function App() {
  const [themeState, setThemeState] = useState('light');
  useEffect(() => settingsDarkMode(setThemeState), []);
  const { token } = useContext(ToDoAppContext);

  return (
    <Router>
      <ThemeProvider theme={themeState === 'light' ? theme : darkTheme}>
        <GlobalStyle />
        <MainContainerApp setThemeState={setThemeState}>
          {token ? (
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/miniGame" element={<MiniGame />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          ) : (
            <FormAuth />
          )}
        </MainContainerApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
