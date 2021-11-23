import React from 'react';
import { GiBurningDot } from 'react-icons/gi';
import { IconTrophy, Container, ContainerPlace, StyledP } from './CardResult.styles';

const CardResult = ({ item: { time, name, avatarSrc }, index }) => {
  return (
    <Container>
      <ContainerPlace>
        <GiBurningDot />
        <StyledP>{index + 1}</StyledP>
        {avatarSrc ? (
          <img src={avatarSrc} alt="avatar" />
        ) : (
          <div style={{ width: '20px', height: '20px', border: '1px solid black' }} />
        )}
        <StyledP>{name}</StyledP>
      </ContainerPlace>
      <ContainerPlace>
        {index < 3 && <IconTrophy index={index} />}
        <StyledP>{time}s</StyledP>
      </ContainerPlace>
    </Container>
  );
};

export default CardResult;
