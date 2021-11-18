import React from 'react';
import SideMenuBar from '../../organisms/SideMenuBar/SideMenuBar';
import { ContainerApp, ContainerCenter } from './MainContainerApp.styles';

const MainContainerApp = ({ children, setThemeState }) => (
  <ContainerCenter>
    <ContainerApp>
      <SideMenuBar setThemeState={setThemeState} />
      {children}
    </ContainerApp>
  </ContainerCenter>
);

export default MainContainerApp;
