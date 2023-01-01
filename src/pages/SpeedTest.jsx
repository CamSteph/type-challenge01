import React, { useEffect } from 'react';
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


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '62d946ed66msh29ab779d3a8f6a4p144f59jsn6f4117186e43',
        'X-RapidAPI-Host': 'linguatools-sentence-generating.p.rapidapi.com'
      }
    };
    
    fetch('https://linguatools-sentence-generating.p.rapidapi.com/realise?object=thief&subject=police&verb=arrest', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <Container>
      <Wrapper>
        Speed test will go here.
      </Wrapper>
    </Container>
  );
};

export default SpeedTest;