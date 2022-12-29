
export const calculateAccuracy = (
  correct = 0,
  incorrect = 0, 
  amtOfLetters
) => {
  
  if (!amtOfLetters) return 0;

  // const percentPerLetter = (100 / (amtOfLetters + correct + incorrect)).toFixed(1);
  // const percentPerLetter = (100 / (amtOfLetters + correct)).toFixed(1);
  const percentPerLetter = (100 / (amtOfLetters)).toFixed(1);
  // console.log()
  const incorrectAmt = (percentPerLetter * incorrect).toFixed(1);
  console.log({percentPerLetter, incorrectAmt})
  console.log('Accuracy: ', (100 - incorrectAmt).toFixed(1));
  return correct ? (100 - incorrectAmt).toFixed(1) : 0;

  // return correct ? (correct / amtOfLetters).toFixed(1)  : 0;

};