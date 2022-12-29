import React, { useContext, useEffect, /*  useEffect */ } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LetterDisplay from '../components/LetterDisplay';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';
import LetterInput from '../containers/LetterInput';
import { calculateAccuracy } from '../utils/calculateAccuracy';
import Timer from '../components/Timer';

const Container = styled.div`
  width: 100%;
  min-height: 108vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em 3em auto 3em;
  background:  #fff;
  position: relative;

  .circle-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;

    .bg-circle-1 {
      position: absolute;
      top: 12%;
      left: 50%;
      transform: translateX(-8%);
      width: 20em;
      height: 20em;
      border-radius: 100%;
      background: #6c7c8b;
    }
  
    .bg-circle-2 {
      position: absolute;
      top: 62%;
      right: 10%;
      /* transform: translateX(5%); */
      width: 14em;
      height: 14em;
      border-radius: 100%;
      background: #718088;
      z-index: 2;
    }
  
    .bg-circle-3 {
      position: absolute;
      top: 48%;
      left: 10%;
      transform: translateX(-25%);
      width: 17em;
      height: 17em;
      border-radius: 100%;
      background: #626d81;
      z-index: 2;
    }

  }


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
  background: linear-gradient(160deg, #c3cfd8a6, #acdaf563);
  border-radius: 10px;
  padding: 40px;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 3;
  backdrop-filter: blur(20px);
  

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
    navigate('/options');
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

  useEffect(() => {
    if(!mode.handMode && !mode.characters) {
      navigate('/practice/setup');
    }
  });

  const accuracyVal = calculateAccuracy(correct, incorrect, letters.length);

  return (
    <Container>
      <h1 className='page-title'>Typing Practice</h1>
      <div className="circle-wrap">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
      </div>
      <Timer timeLimit={5} letters={letters} />
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
            <p className='accuracy-val' style={{color: accuracyVal >= 80 ? 
              '#009200' 
            : 
              accuracyVal >= 60 ? 
              '#e49c00' 
            : 
              (accuracyVal === 0 && continueTyping) ? 
              '#000' 
            : 
              '#d8291d'
            }}
          >
              {accuracyVal}%
            </p>
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