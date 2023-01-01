import React, {useState, createContext} from 'react';

const SpeedTestContext = createContext(undefined);
const SpeedTestDispatchContext = createContext(undefined);

const SpeedTestProvider = ({children}) => {

  const [SpeedTestState, setSpeedTestState] = useState({
    words: [], 
    wordEntries: [],
    correct: 0, 
    incorrect: 0,
    mode: {
      topic: undefined,
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
