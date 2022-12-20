import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 3em 3em 5em;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  background: rgba(225, 225, 225, .75);
`;

const SpeedTest = () => {
  return (
    <Container>
      <Wrapper>
        Speed test will go here.
      </Wrapper>
    </Container>
  );
};

export default SpeedTest;