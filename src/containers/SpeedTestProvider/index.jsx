import React, {useState, createContext} from 'react';

const SpeedTestContext = createContext(undefined);
const SpeedTestDispatchContext = createContext(undefined);

const SpeedTestProvider = ({children}) => {

  const [SpeedTestState, setSpeedTestState] = useState({
    words: {
      // content: [],
      content: [ // for testing without running up the limit on api queries
      "We're", "in", "a", "time", "now", 
      "where", "technology", "is", "such", 
      "that", "we", "can", "create", "anything,", 
      "and", "that's", "what's", "new", "about", 
      "television", "and", "film", "these", "days."
      ],
      author: 'Testing by Cam',
    }, 
    wordEntries: {
      content: [],
      index: 0,
    },
    correct: 0, 
    incorrect: 0,
    mode: {
      subject: undefined,
    },
    continueTyping: true,
    testStarted: false,
    testResults: [],
  });

  return (
    <SpeedTestContext.Provider value={SpeedTestState}>
      <SpeedTestDispatchContext.Provider value={setSpeedTestState}>
        {children}
      </SpeedTestDispatchContext.Provider>
    </SpeedTestContext.Provider>
  );
};

export { SpeedTestProvider, SpeedTestContext, SpeedTestDispatchContext };
