import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  display: block;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  color: #222;
  font-size: 28px;
  font-weight: 500;
  font-family: 'PT Mono', 'Chivo Mono', monospace;
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
  }, [mode, letters]);

  const enterLetter = (e) => {
    const currentLetter = e.target.value;
    let keyCode = (window.event) ? e.keyCode : e.which;

    if(currentLetter.trim() || keyCode === 8) {
      setLetterPracticeState(prev => {
        const updated = {...prev};
        
        let generatedLetters = letters;
        let currentLetters = updated.letterEntries;
  
        if (!generatedLetters.join('').startsWith(currentLetter)) {
          updated.continueTyping = currentLetter.length - 1;
          updated.incorrect = Number(updated.incorrect) ? Number(updated.incorrect) + 1 : 0;
          if(keyCode !== 8) {
            e.target.value = currentLetters.join('');
            return updated;
          }
        }
        else {
          updated.continueTyping = true;
          updated.correct = Number(updated.correct) ? Number(updated.correct) + 1 : 0;
          updated.letterEntries = currentLetter.split(',');
          return updated;
        }

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
      spellCheck={false}
    />
  );
};

export default LetterInput;