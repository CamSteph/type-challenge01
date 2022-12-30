
export const calculateAccuracy = (
  correct = 0,
  incorrect = 0, 
  amtOfLetters
) => {

  if (!correct && !incorrect) return 0;
  if (correct && !incorrect) return 100;

  return Number(((correct / (correct + incorrect)) * 100).toFixed(2));

};