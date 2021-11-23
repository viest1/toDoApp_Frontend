import React, { useContext, useState } from 'react';
import { FormContainer } from './FormAuth.styles';
import ButtonAtoms from '../../atoms/ButtonAtoms/ButtonAtoms';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import FormLabelAndInput from '../../atoms/FormLabelAndInput/FormLabelAndInput';
import InputSubmit from '../../atoms/InputSubmit/InputSubmit';

const FormAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { login } = useContext(ToDoAppContext);

  const handleLoginModeOn = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setName('');
    setErrorMessage();
    setIsLoginMode(true);
  };
  const handleLoginModeOff = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setName('');
    setErrorMessage();
    setIsLoginMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    let dataResponse;
    if (isLoginMode) {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      dataResponse = await response.json();
      login(dataResponse.userId, dataResponse.token);
    } else {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      dataResponse = await response.json();
      login(dataResponse.userId, dataResponse.token);
    }

    if (!dataResponse.userId) {
      setErrorMessage(dataResponse.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {!isLoginMode && (
        <FormLabelAndInput
          id="name"
          placeholder="Enter Name"
          value={name}
          handleInput={(e) => setName(e.target.value)}
        />
      )}
      <FormLabelAndInput
        id="email"
        placeholder="Enter Email"
        value={email}
        handleInput={(e) => setEmail(e.target.value)}
      />
      <FormLabelAndInput
        type="password"
        id="pass"
        placeholder="Enter Password"
        value={password}
        handleInput={(e) => setPassword(e.target.value)}
      />
      {isLoginMode && <InputSubmit value="Log In" setWidth="auto" />}
      {errorMessage && isLoginMode && <p>{errorMessage}</p>}
      {isLoginMode && <ButtonAtoms text="Switch To Sign Up" onClick={handleLoginModeOff} />}
      {!isLoginMode && (
        <React.Fragment>
          <InputSubmit value="Sign Up" setWidth="auto" />
          {errorMessage && !isLoginMode && <p>{errorMessage}</p>}
          <ButtonAtoms text="Switch To Log In" onClick={handleLoginModeOn} />
        </React.Fragment>
      )}
    </FormContainer>
  );
};

export default FormAuth;
