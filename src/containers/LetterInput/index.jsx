import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { generateLetters } from '../../utils/generateLetters';

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
  /* background: ${props => props.continueTyping === true ? '#fff' : '#fc7d6740'}; */
  border: 1.5px solid ${props => props.continueTyping === true ? '#fff' : '#d82a0c'};
  user-select: none;
`;

const LetterInput = ({
  letterEntries,
  letters,
  setLetterPracticeState,
  continueTyping,
  mode,
  practiceStarted,
}) => {

  const letterInputRef = useRef();

  useEffect(() => {
    letterInputRef.current.value = '';
  }, [mode, letters]);

  const handleFocus = () => {
    letterInputRef.current.focus();
  };

  const enterLetter = (e) => {

    const currentLetter = e.target.value;
    let keyCode = (window.event) ? e.keyCode : e.which;

    // && (keyCode < 37 && keyCode > 40)
    if((currentLetter.trim() || keyCode === 8) && keyCode !== 20) {
      setLetterPracticeState(prev => {
        const updated = {...prev};
        
        let generatedLetters = letters;

        // if(generatedLetters.join('') === currentLetter) return window.location.reload();
        if(generatedLetters.join('') === currentLetter) {
          return {
            ...prev,
            letters: generateLetters(prev.mode), 
            letterEntries: [],
            correct: 0, 
            incorrect: 0,
            continueTyping: true,
            practiceStarted: false,
          }
        }

        if (!generatedLetters.join('').startsWith(currentLetter)) {
          updated.continueTyping = currentLetter.length - 1;
          if(keyCode !== 8) {
            updated.incorrect = updated.incorrect > 0 ? Number(updated.incorrect) + 1 : 1;
          }
        }
        else {
          updated.continueTyping = true;
          if(keyCode !== 8) {
            updated.correct = updated.correct > 0 ? Number(updated.correct) + 1 : 1;
            updated.letterEntries = currentLetter.split(',');
            return updated;

          }
        }

        updated.letterEntries = currentLetter.split(',');
  
        return updated;
      });
    }
  };

  return (
    <Input
      continueTyping={continueTyping}
      type='text'
      onKeyUp={enterLetter}
      onMouseDown={(e) => e.preventDefault()} // prevents user from selecting text in the input
      onClick={handleFocus} // allows user to re-focus element if blurred. preventing Default on MousDown event prevents re-focus.
      ref={letterInputRef}
      spellCheck={false}
      placeholder={
        (!practiceStarted || letterEntries.length < 1) 
        ? 
          'Type the characters that are present' 
        : 
          ''
      }
      autoFocus={true}
      maxLength={continueTyping === true ? (letterEntries[0] ? letterEntries[0].length + 1 : 1) : continueTyping + 1}
    />
  );
};

export default LetterInput;