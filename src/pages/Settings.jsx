import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 3em 3em 5em;
  display: grid;
  place-items: center;
`;

const Settings = () => {
  return (
    <Container>
      Settings will go here.
    </Container>
  );
};

export default Settings;