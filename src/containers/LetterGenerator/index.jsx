import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 6em;
  max-height: 12em;
  padding: 20px;
  border: 1px solid #1d8dd8;
  border-radius: 10px;
  margin: auto;
`;

const Letter = styled.p`
  font-size: 40px;
  display: inline-block;
  letter-spacing: 2px;
  color: #777;
  text-transform: capitalize;
`;

const LetterGenerator = ({letterTypes}) => {

  const [letters, setLetters] = useState([]);
  const stringLength = Math.floor(Math.random() * 10);

  console.log(stringLength);

  useEffect(() => {
    const generateLetters = () => {
      switch(letterTypes) {
        case 'left-hand':
          setLetters([
            'q', 'w', 'e', 'r', 't',
            'a', 's', 'd', 'f', 'g',
            'z', 'x', 'c', 'v', 'b',
            '1', '2', '3', '4', '5',
          ]);
          break;
        case 'right-hand':
          setLetters([
            'y', 'u', 'i', 'o', 'p',
            'h', 'j', 'k', 'l', ';',
            'n', 'm',
            '6', '7', '8', '9', '0'
          ]);
          break;
        case 'all':
          setLetters([
            'q', 'w', 'e', 'r', 't',
            'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g',
            'h', 'j', 'k', 'l', ';',
            'z', 'x', 'c', 'v', 'b',
            'n', 'm',
            '1', '2', '3', '4', '5',
            '6', '7', '8', '9', '0'
          ]);
          break;
        default:
          setLetters([
            'q', 'w', 'e', 'r', 't',
            'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g',
            'h', 'j', 'k', 'l', ';',
            'z', 'x', 'c', 'v', 'b',
            'n', 'm',
            '1', '2', '3', '4', '5',
            '6', '7', '8', '9', '0'
          ]);
      }
    };

    generateLetters();

  }, [letterTypes]);

  return (
    <Container>
      {letters.map(letter => <Letter key={letter}>{letter}</Letter>)}
    </Container>
  );
};

export default LetterGenerator;