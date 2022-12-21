import React from 'react';
import Greeting from '../components/Greeting';
import ActionMsg from '../components/ActionMsg';
import styled, { keyframes } from 'styled-components';
import GreetingImage from '../assets/greeting-img.svg';
import Button from '../components/Button';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const slideImg = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50vh);
  }
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: 100vh;
  grid-gap: 3rem;
  justify-items: center;
  min-height: 150vh;
`;

const Section = styled.div`
  width: ${props => props.isLeftSection ? '60%' : '90%'};
  padding: 4em 0;
  text-align: ${props => props.textAlign || ''};
`;

const GreetingImg = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  display: block;
  margin: auto;
  animation: ${slideImg} 1s ease;
`;

const Home = () => {
  
  const navigate = useNavigate();

  const goToPracticeOptions = () => {
    navigate('/practice');
  };

  return (
    <Container>
      <Section textAlign='left' isLeftSection={true}>
        <Greeting />
        <ActionMsg
          message='This is where your typing journey begins!'
          alignment='left'
        />
        <Button 
          btnOnClick={goToPracticeOptions}
          btnText='Practice'
          btnAction='primary'
          btnSize='md'
          btnInverted={false}
          btnIcon={<FaArrowRight />}
        />
      </Section>
      <Section>
        <GreetingImg src={GreetingImage} alt='Greeting image' />
      </Section>
    </Container>
  );
};

export default Home;