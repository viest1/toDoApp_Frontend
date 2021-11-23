import React, { useContext, useEffect, useState } from 'react';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import { ContainerNameDate, Container } from './MessageCard.styles';

const MessageCard = ({ item: { name, text, date, dateTime }, item }) => {
  const { userId } = useContext(ToDoAppContext);
  const [yourMessage, setYourMessage] = useState(false);

  useEffect(() => {
    if (userId) {
      if (userId === item.userId) {
        setYourMessage(true);
      } else {
        setYourMessage(false);
      }
    }
  }, [userId, item.userId]);

  return (
    <Container>
      <ContainerNameDate>
        {yourMessage ? (
          <React.Fragment>
            <h4 style={{ color: 'black' }}>{name}</h4>
            <span style={{ fontSize: '10px', color: 'black' }}>
              {dateTime} {date}
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h4>{name}</h4>
            <span style={{ fontSize: '10px' }}>
              {dateTime} {date}
            </span>
          </React.Fragment>
        )}
      </ContainerNameDate>

      <p>{text}</p>
    </Container>
  );
};

export default MessageCard;
