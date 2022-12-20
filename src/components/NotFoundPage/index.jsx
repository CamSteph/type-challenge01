import React from 'react';
import styled from 'styled-components';
import NotFoundImage from '../../assets/404.jpg';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  min-height: 120vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90vh 1fr;
  place-items: center;

  .wrapper {
    height: 5em;
    transform: translateY(-140%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const NotFoundImg = styled.img`
  height: 75vh;
  width: 75vh;
  object-fit: cover;
`;

const NotFoundMsg = styled.span`
  font-size: 20px;
  text-align: center;
  font-weight: 900;
`;

const NotFoundPage = () => {

  const navigate = useNavigate();

  const goBackHome = () => {
    navigate(-1);
  }

  return (
    <Container>
      <NotFoundImg src={NotFoundImage} />
      <div className='wrapper'>
        <NotFoundMsg>Uh-oh! You seem to be lost.</NotFoundMsg>
        <Button
          btnOnClick={goBackHome}
          btnText='Go back'
          btnAction='primary'
          btnSize='md'
          btnInverted={true}
          btnIcon={<FaArrowLeft />}
        ></Button>
      </div>
    </Container>
  );
};

export default NotFoundPage;