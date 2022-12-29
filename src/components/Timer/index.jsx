import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({timeLimit, letters}) => {

  const [time, setTime] = useState(timeLimit);

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
    <div>{time}</div>
  );
};

export default Timer;