import React from 'react';
import { ContainerIconTitle, StyledLink, Button } from './SideMenuBarItem.styles';

const SideMenuBarItem = ({ onClick, isButton, icon, title, pathRoute }) => (
  <div>
    <ContainerIconTitle>
      <img src={icon} alt={title + ' icon'} />
      {!isButton ? <StyledLink to={pathRoute}>{title}</StyledLink> : <Button onClick={onClick}>{title}</Button>}
    </ContainerIconTitle>
  </div>
);

export default SideMenuBarItem;
