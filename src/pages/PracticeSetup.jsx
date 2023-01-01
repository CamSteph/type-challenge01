import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaHandSparkles, FaHandPaper } from 'react-icons/fa';
import { RxLetterCaseCapitalize } from 'react-icons/rx'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import { TbSortAscendingLetters, TbNumbers } from 'react-icons/tb';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 40em;
  padding: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-template-rows: 10em autofit;
  grid-column-gap: 15%;
  grid-row-gap: 5%;
  place-items: center;
  position: relative;
  
  .title {
    grid-column: 1 / -1;

    .emphasis-text {
      color: #18d;
    }
  }

  .go-back-link {
    display: flex;
    align-items: center;
    position: absolute;
    top: 5.42em;
    left: 5%;
    color: #1d8dd8;
    cursor: pointer;

    &:visited {
      color: #1674b3;
    }

    &:hover {
      color: #1674b3;
      text-decoration: underline;
    }

    .arrow-left {
      margin-right: 3px;
    }
  }

`;

const Card = styled.div`
  width: 10em;
  height: 10em;
  padding: 1.5em;
  border-radius: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: box-shadow .5s ease;
  margin: auto;

  &:hover {
    box-shadow: 0px 0px 19px 8px rgba(47, 47, 105, 0.18);
    color: #18d;

    .card-logo {
      color: #18d;
    }
  }

  .card-logo {
    font-size: 6em;
    margin-bottom: 5px;
  }

  .left-hand-logo {
    transform: scaleX(-1);
  }
`;

const PracticeSetup =  () => {

  const {
    mode,
  } = useContext(LetterPracticeContext);
  
  const setLetterPracticeState = useContext(LetterPracticeDispatchContext);

  const navigate = useNavigate();

  const goToPratice = () => {
    // console.log(mode);
    // if (mode.handMode && mode.characters) {
      navigate('/practice/letters');
    // }
  };

  const setHandMode = (hand) => {
    setLetterPracticeState(prev => {
      const updated = {...prev};
      updated.mode.handMode = hand;
      return updated;
    });
  };

  const setCharacters = (characters) => {
    setLetterPracticeState(prev => {
      const updated = {...prev};
      updated.mode.characters = characters;
      return updated;
    });
    goToPratice();
  };

  const goBackOnePage = () => {
    navigate(-1);
  }

  return (
    <Container>
      <span className='go-back-link' onClick={goBackOnePage}>
        <FaArrowLeft className='arrow-left'/> Go back
      </span>
      {!mode.handMode 
      ?
        (
          <>
            <h1 className='title'>Which <strong className='emphasis-text'>hand</strong> do you need practice with?</h1>
            <Card onClick={() => setHandMode('left-hand')}>
              <FaHandPaper className='card-logo left-hand-logo'/>
              <p>Left hand</p>
            </Card>
            <Card onClick={() => setHandMode('both-hands')}>
              <FaHandSparkles className='card-logo'/>
              <p>Both hands</p>
            </Card>
            <Card onClick={() => setHandMode('right-hand')}>
              <FaHandPaper className='card-logo'/>
              <p>Right hand</p>
            </Card>
          </>
        )
      :
        !mode.characters && 
          (
            <>
              <h1 className='title'>Which <strong className='emphasis-text'>characters</strong> do you need practice with?</h1>
              <Card onClick={() => setCharacters('all')}>
                <RxLetterCaseCapitalize className='card-logo'/>
                <p>All characters</p>
              </Card>
              <Card onClick={() => setCharacters('only-letters')}>
                <TbSortAscendingLetters className='card-logo'/>
                <p>Only letters</p>
              </Card>
              <Card onClick={() => setCharacters('only-numbers')}>
                <TbNumbers className='card-logo'/>
                <p>Only numbers</p>
              </Card>
              <Card onClick={() => setCharacters('only-special-chars')}>
                <MdOutlineAttachMoney className='card-logo'/>
                <p>Only special</p>
              </Card>
            </>
          )
    
      }
    </Container>
  );
};

export default PracticeSetup;