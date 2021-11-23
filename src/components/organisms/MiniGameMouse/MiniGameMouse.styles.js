import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
`;

export const ContainerGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const ContainerResults = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-direction: column;
  height: 300px;
  width: 400px;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1rem;
`;

export const StyledH1 = styled.h1`
  background-image: ${({ theme }) =>
    !theme.colors.background
      ? 'url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif)'
      : 'url(https://media.giphy.com/media/3og0IK7lSFBFRKuBqg/giphy.gif)'};
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  line-height: 0.75;
  margin: 10px 0;
  padding-top: 0.4rem;
`;

export const StyledH2 = styled.h2`
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  line-height: 0.75;
  margin: 10px 0;
  padding: 0.1rem;
`;

export const StyledH3 = styled.h3`
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  line-height: 0.75;
  margin: 10px 0;
  padding: 0.1rem;
`;

export const StyledH4 = styled.h4`
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  line-height: 0.75;
  margin: 10px 0;
  padding: 0.1rem;
`;
