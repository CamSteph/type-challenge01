import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LetterDisplay from '../components/LetterDisplay';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';
import LetterInput from '../containers/LetterInput';
import { calculateAccuracy } from '../utils/calculateAccuracy';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em 3em auto 3em;
  background:  #fff;

  .page-title {
    text-align: left;
    color: #111;
  }

  .quit-practice-btn {

  }

  .mode-switch {
    outline: none;
    height: 2em;
    width: 10em;
    border: 1px solid #1d8dd8;
    border-radius: 5px;
    color: #1d8dd8;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 74vh;
  background: rgba(225, 225, 225, .55);
  border-radius: 10px;
  padding: 40px;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .bottom-row {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .score-tracker {
      width: 8em;
      font-size: 20px;
      .section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 900;

        .accuracy-title {
          margin-right: .35em;
          /* color: #1d8dd8; */
        }

        .accuracy-val {
          color: #1d8dd8;
        }

      }
    }

  }
`;

const LetterPractice = () => {

  const navigate = useNavigate();

  const quitPractice = () => {
    navigate(-1);
  };

  const {
    letters, 
    letterEntries, 
    correct, 
    incorrect, 
    mode, 
    continueTyping,
    practiceStarted,
  } = useContext(LetterPracticeContext);
  
  const setLetterPracticeState = useContext(LetterPracticeDispatchContext);

  const startPractice = () => {
    setLetterPracticeState(prev => {
      return {...prev, practiceStarted: true};
   });
  };

  const setMode = (e) => {
    const value = e.target.value;
    if (value) {
      setLetterPracticeState(prev => {
        return {
          ...prev,
          letterEntries: [],
          mode: value,
          continueTyping: true,
        };
      });
    }
  };


  return (
    <Container>
      <h1 className='page-title' onClick={startPractice}>Typing Practice</h1>
      <select 
        name="mode-switch" 
        id="mode-switch" 
        className="mode-switch" 
        onChange={setMode} 
        defaultValue={mode}
      >
        <option value='both-hands'>Both hands</option>
        <option value='left-hand'>Left hand</option>
        <option value='right-hand'>Right hand</option>
      </select>
      <Wrapper>
        <LetterDisplay 
          mode={mode} 
          setLetterPracticeState={setLetterPracticeState} 
          letters={letters}
          continueTyping={continueTyping}
          letterEntries={letterEntries}
        />
        <LetterInput 
          type='text'
          letterEntries={letterEntries}
          letters={letters}
          setLetterPracticeState={setLetterPracticeState}
          continueTyping={continueTyping}
          mode={mode}
          practiceStarted={practiceStarted}
        />
      <div className='bottom-row'>
        <div className='score-tracker'>
          <span className="section">
            <span className="accuracy-title">Accuracy:</span>
            <p className='accuracy-val'>{calculateAccuracy(correct, incorrect, letters.length)}%</p>
          </span>
        </div>
        <Button 
          btnText='Quit practice'
          btnInverted={false}
          btnAction='danger'
          btnSize='md'
          btnIcon={<FaArrowCircleRight />}
          btnOnClick={quitPractice}
          className='quit-practice-btn'
        />
      </div>
      </Wrapper>
    </Container>
  );
};

export default LetterPractice;