import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaHandSparkles, FaHandPaper } from 'react-icons/fa';
import { RxLetterCaseCapitalize } from 'react-icons/rx'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai';
import { TbSortAscendingLetters, TbNumbers } from 'react-icons/tb';
import { LetterPracticeContext, LetterPracticeDispatchContext } from '../containers/LetterPracticeProvider';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-height: 105vh;
  padding: 5em;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15%;
  grid-row-gap: 5%;
  place-items: center;
  
  .title {
    grid-column: 1 / -1;
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
  }

  .card-logo {
    font-size: 6em;
    margin-bottom: 5px;
    color: #18d;
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
    console.log(mode);
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

  return (
    <Container>
      {!mode.handMode 
      ?
        (
          <>
            <h1 className='title'>Which hand do you need practice with?</h1>
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
              <h1 className='title'>Which characters do you need practice with?</h1>
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