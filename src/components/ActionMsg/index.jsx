import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  width: 100%;
  min-height: 50px;
  text-align: ${props => props.textAlign || 'left'};
  color: #444;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 3px;
`;

const ActionMsg = ({message, alignment}) => {
  return (
    <Container textAlign={alignment}>
      {message}
    </Container>
  );
};

export default ActionMsg;