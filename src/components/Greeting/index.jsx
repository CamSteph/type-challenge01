import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Message = styled.h1`
  font-size: 3em;
  line-height: 150%;
  letter-spacing: 1px;
  text-align: left;
`;

const KeyWord = styled.span`
  color: #1d8dd8;
`;

const Greeting = () => {
  return (
    <Container>
      <Message>
        Welcome to <KeyWord>Type World</KeyWord>.
      </Message>
    </Container>
  )
}

export default Greeting