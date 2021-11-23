import React, { useContext, useEffect, useState } from 'react';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import MessageCard from '../../molecules/MessageCard/MessageCard';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';
import { TextareaStyled } from '../../molecules/NoteInput/NoteInput.styles';
import { FlexItem1, FlexItem2, Container } from './Chat.styles';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const { name, userId, token, setName } = useContext(ToDoAppContext);
  useEffect(() => {
    let interval;
    if (token && userId) {
      getMessages();
      interval = setInterval(() => {
        getMessages();
      }, 1000);
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [userId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendChatText = async () => {
      await fetch(process.env.REACT_APP_BACKEND_URL + '/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          name,
          dateTime: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          timestamp: Date.now(),
          userId,
        }),
      });
    };
    if (userId) {
      sendChatText().then(() => {
        getMessages();
      });
    }
    setText('');
  };

  const getMessages = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/chat');
    const dataResponse = await response.json();
    setMessages(dataResponse);
  };

  useEffect(() => {
    const getName = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const jsonResponse = await response.json();
      setName(jsonResponse.name);
    };

    if (userId) {
      getName();
    }
  }, [userId, setName]);

  return (
    <Container onSubmit={handleSubmit}>
      <FlexItem1>
        {messages &&
          messages
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((item, index) => <MessageCard key={index} item={item} />)}
      </FlexItem1>
      <FlexItem2>
        <TextareaStyled
          id="message"
          placeholder="Enter Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', padding: '2rem' }}
        />
        <InputSubmit setWidth="100%" value="Send Message" />
      </FlexItem2>
    </Container>
  );
};

export default Chat;
