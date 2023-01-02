import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import WordsDisplay from '../components/WordsDisplay';
import { SpeedTestContext, SpeedTestDispatchContext } from '../containers/SpeedTestProvider';
import WordInput from '../containers/WordInput';

const Container = styled.div`
  width: 100%;
  min-height: 108vh;
  padding: 7em 5em;
  display: grid;
  grid-template-rows: 3em 3em auto 3em;
  background:  #fff;
  position: relative;

  .top-row {
      width: 99%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      margin-bottom: 15px;

      strong {
        font-size: 1.5em;
        color: #414141;
      }
    }

  .page-title {
    text-align: left;
    color: #18d;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 64vh;
  background: #00000096;
  border-radius: 10px;
  padding: 40px;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 3;
  backdrop-filter: blur(20px);
`;

const SpeedTest = () => {

  const {
    words,
    wordEntries,
    correct,
    incorrect,
    mode,
    continueTyping,
    testStarted,
    testResults
  } = useContext(SpeedTestContext);

  const setSpeedTestState = useContext(SpeedTestDispatchContext);

  const formatWords = (text) => {
    return text.split(' ');
  }


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '62d946ed66msh29ab779d3a8f6a4p144f59jsn6f4117186e43',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
      }
    };
    
    // fetch(`https://famous-quotes4.p.rapidapi.com/random?category=${mode.subject || 'technology'}&count=1`, options)
    //   .then(response => response.json())
    //   .then(response => {
    //     const [data] = response;
    //     if (data) {
    //       const {text, author} = data;
    //       setSpeedTestContext(prev => {
    //         return {
    //           ...prev,
    //           words: {
    //             content: formatWords(text),
    //             author: author,
    //           },
    //           testStarted: true,
    //         }
    //       })
    //     } else {
    //       setWordFetchError('No quotes found for category. Try refining your search.');
    //       console.error('No quotes found for category. Try refining your search.');
    //       return;
    //     }
    //   })
    //   .catch(err => {
    //     setWordFetchError('Something went wrong. Please try again.');
    //     console.error(err);
    //   });
  }, []);

  return (
    <Container>
      <div className='top-row'>
        <h1 className='page-title'>Speed Test</h1>
        <strong>{testResults.length || 0} / 5</strong>
      </div>
      <Wrapper>
        <WordsDisplay content={words.content} author={words.author} />
        <WordInput words={words} wordEntries={wordEntries} setSpeedTestState={setSpeedTestState} />
      </Wrapper>
    </Container>
  );
};

export default SpeedTest;