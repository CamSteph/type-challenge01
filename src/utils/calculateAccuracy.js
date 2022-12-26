
export const calculateAccuracy = (
  correct = 0,
  incorrect = 0, 
  amtOfLetters
) => {
  
  if (!amtOfLetters) return 0;

  const percentPerLetter = (100 / (amtOfLetters + correct + incorrect)).toFixed(1);
  const incorrectAmt = (percentPerLetter * incorrect).toFixed(1);

  return correct ? (100 - incorrectAmt).toFixed(1) : 0;

};