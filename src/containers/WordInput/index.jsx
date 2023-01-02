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
  /* border: 1px solid #fff; */
  user-select: none;
`;

const WordInput = ({
  wordEntries,
  words,
  setSpeedTestState,
  continueTyping,
  mode,
  practiceStarted,
  setTime,
  time
}) => {

  const wordInputRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    wordInputRef.current.value = '';
  }, [mode, words]);

  const handleFocus = () => {
    wordInputRef.current.focus();
  };
  
  if (time <= 0) {
    wordInputRef.current.focus();
  }

  const enterLetter = (e) => {

    const currentValue = e.target.value;
    const keyCode = (window.event) ? e.keyCode : e.which;

    if((currentValue.trim() || keyCode === 8 || keyCode === 32) && keyCode !== 20) {
      // console.log('currentValue: ', currentValue);
      if (keyCode === 32) {
        e.target.value = '';
        e.target.placeholder = '';
        return;
      } else if (e.target.placeholder === '') {
        e.target.placeholder = 'Type the characters that are present';
      }
      setSpeedTestState(prev => {
        const updated = {...prev};
        
        let {content: generatedWords} = words;
        let {content: enteredWords} = wordEntries;

        if(generatedWords.join(' ') === enteredWords.join(' ')) {
          return {
            ...prev,
            words: {
              // content: [],
              content: [ // for testing without running up the limit on api queries
              "We're", "in", "a", "time", "now", 
              "where", "technology", "is", "such", 
              "television", "and", "film", "these", "days."
              ],
              author: 'Testing by Cam222',
            }, 
            wordEntries: {
              content: [],
              index: 0,
            },
            correct: 0, 
            incorrect: 0,
            mode: {
              subject: undefined,
            },
            continueTyping: true,
            testStarted: false,
            testResults: [...prev, 'test complete'],
          }
        }

      console.log('wordEntries: ', wordEntries)
        if (!generatedWords[wordEntries.index].startsWith(currentValue)) {
          console.log('string DOES NOT match');

          updated.continueTyping = currentValue.length - 1;
          
          if(keyCode !== 8 && continueTyping === true) {
            updated.incorrect = updated.incorrect > 0 ? Number(updated.incorrect) + 1 : 1;
          }

          // const deathMode = sessionStorage.getItem('death-mode');

          // if (deathMode === 'on') {
          //   alert('Youve lost in death mode.');
          //   navigate('/options');
          // }
        } else {
            updated.continueTyping = true;
            if (generatedWords[wordEntries.index] === currentValue) {
              updated.wordEntries.content.push(currentValue);
              updated.testResults.push('test complete');
              updated.wordEntries.index = Number(updated.wordEntries.index || 0) + 1;
            }
            // else if (generatedWords[wordEntries.index]) {
            //   updated.wordEntries.content.pop();
              // updated.wordEntries.content.push(currentValue);
            // } else {
            //   updated.wordEntries.content.push(currentValue);
            // }
          } 
          // if(keyCode !== 8) {
            // updated.correct = updated.correct > 0 ? Number(updated.correct) + 1 : 1;

            // const newEntry = currentValue.split('');
            // updated.wordEntries = [newEntry.join('')];

            // return updated;

          // }

      //   const newEntry = currentValue.split('');
      //   updated.wordEntries = [newEntry.join('')];
  
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
      ref={wordInputRef}
      spellCheck={false}
      placeholder={
        (!practiceStarted || wordEntries.length < 1) 
        ? 
          'Type the characters that are present' 
        : 
          ''
      }
      autoFocus={true}
      maxLength={continueTyping === true ? (words?.content[0] ? words?.content[wordEntries?.index].length + 1 : 1) : (continueTyping || 0) + 1}
    />
  );
};

export default WordInput;