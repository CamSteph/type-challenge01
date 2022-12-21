import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { generateLetters } from '../../utils/generateLetters';

const Container = styled.div`
  width: 100%;
  min-height: 6em;
  max-height: 12em;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  margin: auto;
  display: grid;
  place-items: center;
  line-height: 150%;
  `;

const Letter = styled.p`
line-height: 120%;
  font-size: 40px;
  display: inline-block;
  letter-spacing: 2px;
  color: #888;
  /* text-transform: capitalize; */
  user-select: none;
`;

const LetterDisplay = ({
  mode,
  setLetterPracticeState,
  letters,
}) => {

  useEffect(() => {

    setLetterPracticeState(prev => {
      const updated = {...prev};
      updated.letters = generateLetters(mode);
      return updated;
    });

  }, [mode]);

  return (
    <Container>
      <div>
        {letters && letters.map(letter => <Letter key={letter}>{letter}</Letter>)}
      </div>
    </Container>
  );
};

export default LetterDisplay;