/**
 * Accepts an array of random letters and 
 * randomly adds spaces
 * @param {array} letters
 * @returns New array with spaces
 */
export const addSpacesToLetters = (letters) => {
  // can only capitalize, at most, half of the letters
  // let currentIndex = Math.floor(Math.random() * (Math.floor(letters.length / 2) / 2)), randomIndex;

  // while (currentIndex !== 0) {
  //   randomIndex = Math.floor(Math.random() * (letters.length - 1));
  //   letters[randomIndex] = letters[randomIndex].toUpperCase() + '__';
  //   currentIndex--;
  // }

  return letters;
};
/**
 * Accepts an array of random letters and 
 * randomly captializes up to half of the letters
 * @param {array} shuffledLetters
 * @returns Randomly capitalized array of letters
 */
export const capitalizeArrayOfLetters = (shuffledLetters) => {
  // can only capitalize, at most, half of the letters
  let currentIndex = Math.floor(Math.random() * (Math.floor(shuffledLetters.length / 2))), randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * (shuffledLetters.length - 1));
    shuffledLetters[randomIndex] = shuffledLetters[randomIndex].toUpperCase();
    currentIndex--;
  }

  return addSpacesToLetters(shuffledLetters);
};

/**
 * Accepts an array of letters and shuffles them
 * @param {array} arrayOfLetters 
 * @returns Shuffled array of letters
 */
export const shuffleArrayOfLetters = (arrayOfLetters) => {
  let currentIndex = arrayOfLetters.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // a way to do bubble sort without the extra `temp` value
    [
      arrayOfLetters[currentIndex], 
      arrayOfLetters[randomIndex]
    ] = [
      arrayOfLetters[randomIndex],
      arrayOfLetters[currentIndex],
    ]
  }
  return capitalizeArrayOfLetters(arrayOfLetters);
}


/**
 * Generate letters depending on letter practice mode
 * @param {string} `mode` The type of letters to return, ex: 'left-hand'
 * @returns Array of characters represented by the mode
 */
export const generateLetters = (mode = 'all') => {
  let letters;
  switch(mode) {
    case 'left-hand':
      letters = [
        'q', 'w', 'e', 'r', 't',
        'a', 's', 'd', 'f', 'g',
        'z', 'x', 'c', 'v', 'b',
        '1', '2', '3', '4', '5',
      ];
      break;
    case 'right-hand':
      letters = [
        'y', 'u', 'i', 'o', 'p',
        'h', 'j', 'k', 'l', ';',
        'n', 'm',
        '6', '7', '8', '9', '0'
      ];
      break;
    case 'both-hands':
      letters = [
        'q', 'w', 'e', 'r', 't',
        'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g',
        'h', 'j', 'k', 'l', ';',
        'z', 'x', 'c', 'v', 'b',
        'n', 'm',
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '0'
      ];
      break;
    default:
      letters = [
        'q', 'w', 'e', 'r', 't',
        'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g',
        'h', 'j', 'k', 'l', ';',
        'z', 'x', 'c', 'v', 'b',
        'n', 'm',
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '0'
      ];
  }
  return shuffleArrayOfLetters(letters);
};
