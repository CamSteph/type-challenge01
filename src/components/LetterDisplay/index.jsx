import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { generateLetters } from '../../utils/generateLetters';

const Container = styled.div`
  width: 100%;
  min-height: 6em;
  max-height: 12em;
  padding: 20px;
  border: 1px solid #1d8dd8;
  border-radius: 10px;
  margin: auto;
  display: grid;
  place-items: center;
`;

const Letter = styled.p`
  font-size: 40px;
  display: inline-block;
  letter-spacing: 2px;
  color: #777;
  text-transform: capitalize;
`;

const LetterDisplay = ({mode}) => {

  const [letters, setLetters] = useState([]);
  // const remove = Math.floor(Math.random() * letter);

  // console.log(stringLength);

  useEffect(() => {

    setLetters(generateLetters(mode));

  }, [mode]);

  return (
    <Container>
      <div>
        {letters.map(letter => <Letter key={letter}>{letter}</Letter>)}
      </div>
    </Container>
  );
};

export default LetterDisplay;