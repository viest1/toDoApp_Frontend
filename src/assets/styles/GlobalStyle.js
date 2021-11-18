import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey}
  }

  #root {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.green100};
    font-size:14px;
    font-family: 'Nunito', sans-serif;
  }
  input,button,textarea{
    font-family: 'Nunito', sans-serif;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 75px; //for horizontal scrollbar
    height: 75px; //for vertical scrollbar
  }

  ::-webkit-scrollbar-track {
    display:none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid #6aa7b350;
    border-left: 0;
    border-right: 0;
    background-color: ${({ theme }) => theme.colors.green200}
  }

  img{
    width:15px;
    height:15px;
  }
  #root.dark-mode{
    background-color: #1a1919;
    color: #999;
  }
  #root.light-mode{
    background-color: ${({ theme }) => theme.colors.green100};
    transition: background-color 0.4s ease;
  }
`;
