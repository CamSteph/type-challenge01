
export const calculateAccuracy = (
  correct = 0,
  incorrect = 0, 
  amtOfLetters
) => {
  if (!correct && !incorrect) return 0;
  if (correct && !incorrect) return 100;

  return Number(((correct / (correct + incorrect)) * 100).toFixed(2));
};

export const calculateOverallAccuracy = (results) => {
  const total = results.reduce((curr, prev) => curr + prev, 0);
  const overallAccuracy = (total / results.length).toFixed(2);

  return overallAccuracy;
};
