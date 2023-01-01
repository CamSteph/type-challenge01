import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { generateLetters } from '../../utils/generateLetters';

const Container = styled.div`
  width: 100%;
  /* min-height: 6em;
  max-height: 15em; */
  height: auto;
  padding: 10px;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  margin: auto;
  display: grid;
  /* place-items: center; */
  line-height: 150%;
  `;

const Letter = styled.p`
  line-height: 140%;
  font-size: 40px;
  font-family: 'PT Mono', 'Chivo Mono', monospace;
  font-weight: 900;
  display: inline-block;
  letter-spacing: 2px;
  user-select: none;
  margin-bottom: 3px;
  span {
    background: #ced2d4;
    padding: 5px;
    display: grid;
    place-items: center;
    &:last-child {
      /* border-radius: 5px; */
    }
  }
`;

const LetterDisplay = ({
  mode,
  setLetterPracticeState,
  letters,
  continueTyping,
  letterEntries,
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
        {letters && letters.map((letter, i) => {
          let length;

          if (letterEntries[0]) length = letterEntries[0].length;
          else length = 0;

          if(continueTyping === true) {
            if(length > 0 && i < length) {
              return (
                <Letter key={letter}>
                  <span style={{background: 'transparent', color: '#36be36'}}>{letter}</span>
                </Letter>
              )
            }
            else {
              return (
                <Letter key={letter}>
                  <span style={{background: 'transparent', color: '#fff'}}>{letter}</span>
                </Letter>
              )
            }
          }
          else {
            if (i === length - 1) {
              return (
                <Letter key={letter}>
                  <span style={{background: 'transparent', color: '#d8291d'}}>{letter}</span>
                </Letter>
              )
            }
            else if (i < continueTyping) {
              return (
                <Letter key={letter}>
                  <span style={{background: 'transparent', color: '#36be36'}}>{letter}</span>
                </Letter>
              )
            }
            else {
              return (
                <Letter key={letter}>
                  <span style={{background: 'transparent', color: '#fff'}}>{letter}</span>
                </Letter>
              )
            }
          }      
        })}
      </div>
    </Container>
  );
};

export default LetterDisplay;