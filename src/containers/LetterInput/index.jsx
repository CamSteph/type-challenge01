import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { calculateAccuracy } from '../../utils/calculateAccuracy';
import { generateLetters } from '../../utils/generateLetters';

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  display: block;
  margin: auto;
  padding: 12px;
  border-radius: 10px;
  color: #222;
  font-size: 24px;
  font-weight: 500;
  font-family: 'PT Mono', 'Chivo Mono', monospace;
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
  setTime,
  time
}) => {

  const letterInputRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    letterInputRef.current.value = '';
  }, [mode, letters]);

  const handleFocus = () => {
    letterInputRef.current.focus();
  };
  
  if (time <= 0) {
    letterInputRef.current.focus();
  }

  const enterLetter = (e) => {

    const currentLetter = e.target.value;
    const keyCode = (window.event) ? e.keyCode : e.which;

    if((currentLetter.trim() || keyCode === 8) && keyCode !== 20) {
      setLetterPracticeState(prev => {
        const updated = {...prev};
        
        let generatedLetters = letters;

        if(generatedLetters.join('') === currentLetter) {
          return {
            ...prev,
            letters: generateLetters(prev.mode), 
            letterEntries: [],
            correct: 0, 
            incorrect: 0,
            continueTyping: true,
            practiceStarted: false,
            practiceResults: [...updated.practiceResults, calculateAccuracy(updated.correct, updated.incorrect, updated.letters.length)],
          }
        }

        console.log(generatedLetters.join('').startsWith(currentLetter))

        if (!generatedLetters.join('').startsWith(currentLetter)) {

          updated.continueTyping = currentLetter.length - 1;
          
          if(keyCode !== 8 && continueTyping === true) {
            updated.incorrect = updated.incorrect > 0 ? Number(updated.incorrect) + 1 : 1;
          }

          const deathMode = sessionStorage.getItem('death-mode');

          if (deathMode === 'on') {
            alert('Youve lost in death mode.');
            navigate('/options');
          }
        } else {
          updated.continueTyping = true;
          if(keyCode !== 8) {
            updated.correct = updated.correct > 0 ? Number(updated.correct) + 1 : 1;

            const newEntry = currentLetter.split('');
            updated.letterEntries = [newEntry.join('')];

            return updated;

          }
        }

        const newEntry = currentLetter.split('');
        updated.letterEntries = [newEntry.join('')];
  
        return updated;
      });
    }
  };

  return (
    <Input
      disabled={time > 0}
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