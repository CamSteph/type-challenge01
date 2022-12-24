
export const calculateAccuracy = (
  correct = 0,
  incorrect = 0, 
  amtOfLetters
) => {
  if (!amtOfLetters) return 0;
  // console.log(Number(amtOfLetters))
  const percentPerLetter = (100 / (amtOfLetters + correct + incorrect)).toFixed(2);
  console.log('%: ', percentPerLetter)
  const incorrectAmt = (percentPerLetter * incorrect).toFixed(2);
  console.log('inccorect amt', incorrectAmt)

  return correct ? (100 - incorrectAmt).toFixed(2) : 0;

};