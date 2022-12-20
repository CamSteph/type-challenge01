import React, {useState, createContext} from 'react';

const LetterScoreContext = createContext(undefined);
const LetterScoreDispatchContext = createContext(undefined);

const LetterScoreProvider = ({children}) => {

  const [letterScore, setLetterScore] = useState({correct: 0, incorrect: 0});

  return (
    <LetterScoreContext.Provider value={letterScore}>
      <LetterScoreDispatchContext.Provider value={setLetterScore}>
        {children}
      </LetterScoreDispatchContext.Provider>
    </LetterScoreContext.Provider>
  );
};

export { LetterScoreProvider, LetterScoreContext, LetterScoreDispatchContext };
// export default LetterScoreProvider;