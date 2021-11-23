import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import GeneralProvider from './providers/GeneralProvider';

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
