import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import Button from '../Button';
import { generateLetters } from '../../utils/generateLetters';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20%;
  position: absolute;
  z-index: 8;
  background: #000000dd;
  background: #000;
  color: #ccc;
  text-align: center;

  .star-rating {
    width: auto;
    display: flex;
    margin: .8em auto;
    align-items: center;
    justify-content: center;
    color: #f7d200;
    font-size: 30px;

    .star {
      margin-right: .45em;
    }
  }

  .message {
    margin: 1em 0;
  }

  .overall-accuracy {

    strong {
      color: #18d;
    }
  }

  .options {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1.8em auto;
  }
`;

const PracticeCompleteModal = ({
  message,
  overallAccuracy,
  quitPractice,
  setLetterPracticeState,
  setTime,
}) => {

  const constructRatingArray = () => {
    if (overallAccuracy % 20 === 0) {
      return overallAccuracy / 20;
    } else {
      return Math.floor(parseInt((overallAccuracy / 20) + 1));
    }
  };

  let ratingArray = new Array(constructRatingArray()).fill('');

  const practiceAgain = () => {
    setTime(3);
    setLetterPracticeState(prev => {
      return {
        ...prev,
        letters: generateLetters(prev.mode), 
        letterEntries: [],
        correct: 0, 
        incorrect: 0,
        continueTyping: true,
        practiceStarted: false,
        practiceResults: [],
      }  
    })
  }

  return (
    <Container>
      <h1>Congratulations!</h1>
      <h2 className='message'>{message}</h2>
      <div className='star-rating'>
        {ratingArray && ratingArray.map(rating => <FaStar key={crypto.randomUUID()} className='star'/>)}
      </div>
      <p className="overall-accuracy">Overall Accuracy: <strong
      style={{color: overallAccuracy >= 80 ? 
        '#009200' 
      : 
        overallAccuracy >= 60 ? 
        '#e49c00' 
      : 
        (overallAccuracy === 0 && continueTyping) ? 
        '#ccc' 
      : 
        '#d8291d'
      }}
      >{overallAccuracy}%</strong></p>
      <div className="options">
        <Button 
          btnText='Practice Again'
          btnInverted={true}
          btnAction='primary'
          btnSize='md'
          btnOnClick={practiceAgain}
          />
        <Button 
          btnText='Quit Practice'
          btnInverted={true}
          btnAction='danger'
          btnSize='md'
          btnOnClick={quitPractice}
        />
      </div>
    </Container>
  );
};

export default PracticeCompleteModal;