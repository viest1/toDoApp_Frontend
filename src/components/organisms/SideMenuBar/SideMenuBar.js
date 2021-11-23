import React, { useContext, useEffect, useState } from 'react';
import settingsIcon from 'assets/icons/settingsIcon.png';
import notesIcon from 'assets/icons/notes.png';
import dashboardIcon from 'assets/icons/dashboard.png';
import gameIcon from 'assets/icons/gameIcon.png';
// import calculatorIcon from 'assets/icons/calculator.png';
import tutorial from 'assets/icons/tutorial.png';
import chatIcon from 'assets/icons/chatIcon.png';
import logoutIcon from 'assets/icons/logout.png';
import SideMenuBarItem from '../../molecules/SideMenuBarItem/SideMenuBarItem';
import { Container, ContainerTitleDarkMode, TitleApp } from './SideMenuBar.styles';
import DarkMode from '../../molecules/DarkMode/DarkMode';
import { ToDoAppContext } from '../../../providers/GeneralProvider';

const SideMenuBar = ({ setThemeState }) => {
  const { token, logout, logoutTime, setStartTutorial } = useContext(ToDoAppContext);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (token) {
      interval = setInterval(() => setTime((prev) => prev + 10), 10);
      return () => {
        clearInterval(interval);
        setTime(0);
      };
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    setStartTutorial(false);
  };

  const handleTutorial = (e) => {
    e.preventDefault();
    setStartTutorial(true);
  };

  return (
    <Container>
      <div>
        <ContainerTitleDarkMode>
          <TitleApp>.toDoApp</TitleApp>
          <DarkMode setThemeState={setThemeState} />
        </ContainerTitleDarkMode>
        <SideMenuBarItem title="Dashboard" icon={dashboardIcon} pathRoute="/" />
        <SideMenuBarItem title="Notes" icon={notesIcon} pathRoute="/notes" />
        <SideMenuBarItem title="Chat" icon={chatIcon} pathRoute="/chat" />
        {/*<SideMenuBarItem title="Calculator" icon={calculatorIcon} pathRoute="/calculator" />*/}
      </div>
      <div>
        <SideMenuBarItem title="Mini Game" icon={gameIcon} pathRoute="/miniGame" />
        <SideMenuBarItem title="Settings" icon={settingsIcon} pathRoute="/settings" />
        {token && <SideMenuBarItem isButton title="Watch Tutorial" onClick={handleTutorial} icon={tutorial} />}
        {token && <SideMenuBarItem isButton title="Log Out" onClick={handleLogout} icon={logoutIcon} />}
        {token && <p>You will logout for {((logoutTime - time) / 1000).toFixed(2)}s</p>}
      </div>
    </Container>
  );
};

export default SideMenuBar;
