import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.section`
  width: 80%;
  height: 12em;
  background: #dbdbdb83;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  .option-title {
    color: #1d8dd8;
  }
`;

const Option = ({
  btnText,
  btnAction,
  destination,
  optionTitle,
  optionDescription,
  optionImg,
}) => {

  const navigate = useNavigate();

  const goToDestination = () => {
    navigate(`${destination}`);
  };


  return (
    <Container>
      <h2 className='option-title'>{optionTitle}</h2>
      <p className='option-description'>{optionDescription}</p>
        <Button 
          btnText={btnText}
          btnInverted={false}
          btnAction={btnAction}
          btnSize='md'
          btnOnClick={goToDestination}
          btnIcon={<FaCheck />}
        />
    </Container>
  )
}

export default Option