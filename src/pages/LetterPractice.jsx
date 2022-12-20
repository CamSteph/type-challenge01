import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import LetterDisplay from '../components/LetterDisplay';
import { FaArrowCircleRight } from 'react-icons/fa';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em 3em auto 3em;

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

  const {letters, correct, incorrect, mode} = useContext(LetterPracticeContext);
  const setLetterPracticeState = useContext(LetterPracticeDispatchContext);

  const incrementCorrectAmt = () => {
    setLetterPracticeState({incorrect, correct: correct + 1});
  };

  const setMode = (e) => {
    const value = e.target.value;
    if (value) {
      setLetterPracticeState(prev => {
        const updated = {...prev};
        updated.mode = value;
        return updated;
      });
    }
  };


  return (
    <Container>
      <h1 className='page-title' onClick={incrementCorrectAmt}>Letter Practice</h1>
      <select name="mode-switch" id="mode-switch" className="mode-switch" onChange={setMode}>
        <option value='all' disabled>Choose a mode:</option>
        <option value='left-hand'>Left hand</option>
        <option value='right-hand'>Right hand</option>
        <option value='all'>Both hands</option>
      </select>
      <Wrapper>
        <LetterDisplay mode={mode} />
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