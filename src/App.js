import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Phrase from './components/Phrase';

const SCContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const SCButton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [phrase, setPhrase] = useState({});
  useEffect(() => {
    checkApi()
  }, [])
  const checkApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setPhrase(phrase[0]);
  };
  return (
    <SCContainer>
      <Phrase phrase={phrase} />
      <SCButton onClick={checkApi}> Obtener frase</SCButton>
    </SCContainer>
  );
}

export default App;
