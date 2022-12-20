import React, { useState, useEffect, createContext } from 'react';

const GeneratedLettersContext = createContext([]);
const GeneratedLettersDispatchContext = createContext(undefined);

const LetterGeneratorProvider = () => {

  const [letters, setLetters] = useState([]);
  const stringLength = Math.floor(Math.random() * 10);

  console.log(stringLength);

  useEffect(() => {
    const generateLetters = () => {
      // switch(letterTypes) {
      //   case 'left-hand':
      //     setLetters([
      //       'q', 'w', 'e', 'r', 't',
      //       'a', 's', 'd', 'f', 'g',
      //       'z', 'x', 'c', 'v', 'b',
      //       '1', '2', '3', '4', '5',
      //     ]);
      //     break;
      //   case 'right-hand':
      //     setLetters([
      //       'y', 'u', 'i', 'o', 'p',
      //       'h', 'j', 'k', 'l', ';',
      //       'n', 'm',
      //       '6', '7', '8', '9', '0'
      //     ]);
      //     break;
      //   case 'all':
      //     setLetters([
      //       'q', 'w', 'e', 'r', 't',
      //       'y', 'u', 'i', 'o', 'p',
      //       'a', 's', 'd', 'f', 'g',
      //       'h', 'j', 'k', 'l', ';',
      //       'z', 'x', 'c', 'v', 'b',
      //       'n', 'm',
      //       '1', '2', '3', '4', '5',
      //       '6', '7', '8', '9', '0'
      //     ]);
      //     break;
      //   default:
      //     setLetters([
      //       'q', 'w', 'e', 'r', 't',
      //       'y', 'u', 'i', 'o', 'p',
      //       'a', 's', 'd', 'f', 'g',
      //       'h', 'j', 'k', 'l', ';',
      //       'z', 'x', 'c', 'v', 'b',
      //       'n', 'm',
      //       '1', '2', '3', '4', '5',
      //       '6', '7', '8', '9', '0'
      //     ]);
      // }
    };

    generateLetters();

  }, [letterTypes]);
  return (
    <div>LetterGeneratorProvider</div>
  );
};

export { LetterGeneratorProvider, GeneratedLettersContext, GeneratedLettersDispatchContext };