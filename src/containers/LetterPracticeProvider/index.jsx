import React, {useState, createContext} from 'react';

const LetterPracticeContext = createContext(undefined);
const LetterPracticeDispatchContext = createContext(undefined);

const LetterPracticeProvider = ({children}) => {

  const [letterPracticeState, setLetterPracticeState] = useState({
    letters: [], 
    letterEntries: [],
    correct: 0, 
    incorrect: 0,
    mode: {
      handMode: undefined,
      characters: undefined,
    },
    continueTyping: true,
    practiceStarted: false,
    practiceResults: [],
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
