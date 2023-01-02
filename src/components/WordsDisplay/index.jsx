import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  /* min-height: 6em;
  max-height: 15em; */
  height: auto;
  padding: 10px;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  margin: auto;
  /* display: grid; */
  /* place-items: center; */
  line-height: 150%;
`;

const WordsDisplay = ({content, author}) => {

  const [wordFetchError, setWordFetchError] = useState(null);

  return (
    <Container>
      {content && content.map(word => <span key={crypto.randomUUID()}>{word} </span>)}
      - {author && author}
      {wordFetchError && wordFetchError}
    </Container>
  );
};

export default WordsDisplay;