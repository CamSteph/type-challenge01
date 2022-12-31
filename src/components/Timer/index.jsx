import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  margin: auto;
  padding: .75em;
  font-size: 4em;
  font-weight: 500;
  border: 1px solid #ccc;
  color: #ccc;
  border-radius: 100%;
`;

const Timer = ({time, setTime, letters}) => {

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time <= 0) {
      clearTimeout(countdownTimer);
    }

    return () => {
      clearTimeout(countdownTimer);
    }

  }, [time, letters]);


  return (
    <Container>{time}</Container>
  );
};

export default Timer;