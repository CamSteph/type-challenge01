import React, {useState, createContext} from 'react';

const LetterPracticeContext = createContext(undefined);
const LetterPracticeDispatchContext = createContext(undefined);

const LetterPracticeProvider = ({children}) => {

  const [letterPracticeState, setLetterPracticeState] = useState({
    letters: [], 
    correct: 0, 
    incorrect: 0,
    mode: 'left-hand'
  });

  return (
    <LetterPracticeContext.Provider value={letterPracticeState}>
      <LetterPracticeDispatchContext.Provider value={setLetterPracticeState}>
        {children}
      </LetterPracticeDispatchContext.Provider>
    </LetterPracticeContext.Provider>
  );
};

export { LetterPracticeProvider, LetterPracticeContext, LetterPracticeDispatchContext };
