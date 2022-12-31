import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import Option from '../components/Option';

const Container = styled.div`
  display: grid;
  align-items: center;
  padding-top: 6rem;
  grid-template-columns: 100vw;
  grid-template-rows: repeat(auto-fit, minmax(10em, 1fr));
  justify-items: center;
  min-height: 100vh;
  position: relative;
  
  .go-back-link {
    display: flex;
    align-items: center;
    position: absolute;
    top: 15%;
    left: 5%;
    color: #1d8dd8;

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

const PracticeOptions = () => {
  return (
    <Container>
      <Link to='/' className='go-back-link'><FaArrowLeft className='arrow-left'/> Go back</Link>
      <Option 
        optionTitle='Typing practice' 
        optionDescription="Here you'll be able to practice accuracy. This will improve your muscle memory!"
        destination='setup' 
        btnText='Start practice'
        btnAction='primary'
      />
      <Option 
        optionTitle='Speed test' 
        optionDescription="Put your typing skills to the test by taking on the speed test!"
        destination='speed-test'
        btnText='Start test'
        btnAction='success'
      />
    </Container>
  );
};

export default PracticeOptions;