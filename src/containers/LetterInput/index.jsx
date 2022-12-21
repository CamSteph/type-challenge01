import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  display: block;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 500;
`;

const LetterInput = ({
  letterEntries,
  letters,
  setLetterPracticeState,
  continueTyping,
}) => {

  const enterLetter = (e) => {
    const currentLetter = e.target.value;
    let keyCode = (window.event) ? e.keyCode : e.which;
    console.log(keyCode);
    setLetterPracticeState(prev => {
      const updated = {...prev};
      
      let generatedLetters = letters;
      let currentLetters = updated.letterEntries;
      if (!generatedLetters.join('').startsWith(currentLetters.join(''))) {
        updated.continueTyping = false;
      }
      else {
        updated.continueTyping = true;
        // updated.letterEntries = [currentLetter.split(',')];
      }
      if(!updated.continueTyping && e.keyCode !== 8) {
        e.target.value = updated.letterEntries.join('');
        return updated;
      };
      updated.letterEntries = [currentLetter.split(',')];

      return updated;
    })
  };

  return (
    <Input
      type='text'
      // onChange={enterLetter}
      onKeyUp={enterLetter}
      maxLength={letterEntries.length + 3}
    />
  );
};

export default LetterInput;