import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LetterGenerator from '../containers/LetterGenerator';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LetterScoreContext, LetterScoreDispatchContext } from '../containers/LetterScoreProvider';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em auto 3em;

  .page-title {
    text-align: left;
    color: #1d8dd8;
  }

  .quit-practice-btn {

  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  background: rgba(225, 225, 225, .75);
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
      }
    }

  }
`;

const LetterInput = styled.input`
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

const LetterPractice = () => {

  const navigate = useNavigate();

  const quitPractice = () => {
    navigate('/');
  }

  const {correct, incorrect} = useContext(LetterScoreContext);
  const setLetterScore = useContext(LetterScoreDispatchContext);

  const incrementCorrectAmt = () => {
    setLetterScore({incorrect, correct: correct + 1});
  };


  return (
    <Container>
      <h1 className='page-title' onClick={incrementCorrectAmt}>Letter Practice</h1>
      <Wrapper>
        <LetterGenerator />
        <LetterInput 
          type='text'
        />
      <div className='bottom-row'>
        <div className='score-tracker'>
          <span className="section">
            <h3 className="correct">Correct:</h3>
            {correct}
          </span>
          <span className="section">
            <h3 className="incorrect">Incorrect:</h3>
            {incorrect}
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