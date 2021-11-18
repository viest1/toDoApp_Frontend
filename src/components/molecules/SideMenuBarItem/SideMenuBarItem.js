import React from 'react';
import { ContainerIconTitle, StyledLink } from './SideMenuBarItem.styles';

const SideMenuBarItem = ({ icon, title, pathRoute }) => (
  <div>
    <ContainerIconTitle>
      <img src={icon} alt={title + ' icon'} />
      <StyledLink to={pathRoute}>{title}</StyledLink>
    </ContainerIconTitle>
  </div>
);

export default SideMenuBarItem;
