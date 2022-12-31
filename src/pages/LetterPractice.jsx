import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LetterDisplay from '../components/LetterDisplay';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';
import LetterInput from '../containers/LetterInput';
import { calculateAccuracy, calculateOverallAccuracy } from '../utils/calculateAccuracy';
import Timer from '../components/Timer';
import PracticeCompleteModal from '../components/PracticeCompleteModal';

const Container = styled.div`
  width: 100%;
  min-height: 108vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em 3em auto 3em;
  background:  #fff;
  position: relative;

  .top-row {
      width: 99%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      margin-bottom: 15px;

      strong {
        font-size: 1.5em;
        color: #414141;
      }
    }

  .page-title {
    text-align: left;
    color: #18d;
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
  min-height: 64vh;
  background: #00000096;
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
          color: #ccc;
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

  const [time, setTime] = useState(3);

  const {
    letters, 
    letterEntries, 
    correct, 
    incorrect, 
    mode, 
    continueTyping,
    practiceStarted,
    practiceResults,
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
      <div className='top-row'>
        <h1 className='page-title'>Typing Practice</h1>
        <strong>{practiceResults.length} / 5</strong>
      </div>
      {practiceResults.length >= 5 && 
        (
          <PracticeCompleteModal 
            message="You've completed the practice!"
            overallAccuracy={calculateOverallAccuracy(practiceResults)}
            quitPractice={quitPractice}
            setLetterPracticeState={setLetterPracticeState}
            setTime={setTime}
          />
        )
      }
      <Wrapper>
        {
          time > 0 ?
          (
            <Timer 
              time={time} 
              setTime={setTime} 
              letters={letters} 
            />

          )
          :
          (
            <LetterDisplay 
              mode={mode} 
              setLetterPracticeState={setLetterPracticeState} 
              letters={letters}
              continueTyping={continueTyping}
              letterEntries={letterEntries}
            />
          )
        }
        <LetterInput 
          type='text'
          letterEntries={letterEntries}
          letters={letters}
          setLetterPracticeState={setLetterPracticeState}
          continueTyping={continueTyping}
          mode={mode}
          practiceStarted={practiceStarted}
          setTime={setTime}
          time={time}
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
                '#ccc' 
              : 
                '#d8291d'
              }}
            >
                {accuracyVal}%
              </p>
            </span>
          </div>
          <Button 
            btnText='Quit'
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