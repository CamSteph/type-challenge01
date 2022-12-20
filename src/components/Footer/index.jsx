import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 4em;
  padding: .5em;
  background: #111;
  color: rgb(225, 225, 225);
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <h4>Type World.</h4>
      <span>All rights reserved. &copy;</span>
    </Container>
  );
};

export default Footer;