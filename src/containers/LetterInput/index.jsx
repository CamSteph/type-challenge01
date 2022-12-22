import React, { useEffect, useRef } from 'react';
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
  mode,
}) => {

  const letterInputRef = useRef();

  useEffect(() => {
    letterInputRef.current.value = '';
  }, [mode]);

  const enterLetter = (e) => {
    const currentLetter = e.target.value;
    console.log(currentLetter)
    let keyCode = (window.event) ? e.keyCode : e.which;
    if(currentLetter.trim()) {
      setLetterPracticeState(prev => {
        const updated = {...prev};
        
        let generatedLetters = letters;
        let currentLetters = updated.letterEntries;
  
        if (!generatedLetters.join('').startsWith(currentLetters.join(''))) {
          updated.continueTyping = currentLetters.join('').length - 1;
        }
        else {
          updated.continueTyping = true;
        }
  
        if(updated.continueTyping !== true && keyCode !== 8) {
          e.target.value = updated.letterEntries.join('');
          return updated;
        }
        console.log('currentLettr is: ', currentLetter)
        updated.letterEntries = currentLetter.split(',');
  
        return updated;
      });
    }
  };

  return (
    <Input
      type='text'
      onKeyUp={enterLetter}
      ref={letterInputRef}
    />
  );
};

export default LetterInput;