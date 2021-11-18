import React from 'react';
import settingsIcon from 'assets/icons/settingsIcon.png';
import notesIcon from 'assets/icons/notes.png';
import dashboardIcon from 'assets/icons/dashboard.png';
import gameIcon from 'assets/icons/gameIcon.png';
import calculatorIcon from 'assets/icons/calculator.png';
import SideMenuBarItem from '../../molecules/SideMenuBarItem/SideMenuBarItem';
import { Container, ContainerTitleDarkMode, TitleApp } from './SideMenuBar.styles';
import DarkMode from '../../molecules/DarkMode/DarkMode';

const SideMenuBar = ({ setThemeState }) => (
  <Container>
    <div>
      <ContainerTitleDarkMode>
        <TitleApp>.toDoApp</TitleApp>
        <DarkMode setThemeState={setThemeState} />
      </ContainerTitleDarkMode>
      <SideMenuBarItem title="Dashboard" icon={dashboardIcon} pathRoute="/" />
      <SideMenuBarItem title="Notes" icon={notesIcon} pathRoute="/notes" />
      <SideMenuBarItem title="Calculator" icon={calculatorIcon} pathRoute="/calculator" />
    </div>
    <div>
      <SideMenuBarItem title="Mini Game" icon={gameIcon} pathRoute="/miniGame" />
      <SideMenuBarItem title="Settings" icon={settingsIcon} pathRoute="/settings" />
    </div>
  </Container>
);

export default SideMenuBar;
