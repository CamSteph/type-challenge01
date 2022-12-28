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
 * Accepts an array of letters and 
 * randomly reduces the length to a random length.
 * Minimum length is 3
 * @param {array} letters
 * @returns Array of random length
 */
const setLetterAmt = (letters = []) => {
  const randomLength = Math.floor(Math.random() * ((letters.length - 1) - 3) + 3);
  letters.length = randomLength;
  // console.log(crypto.randomUUID());
  return letters;
}

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

  return setLetterAmt(shuffledLetters);
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
export const generateLetters = (mode = {}) => {
  let letters;
  const praticeMode = `${mode.handMode}-${mode.characters}`
  switch(praticeMode) {
    case 'left-hand-all':
      letters = [
        'q', 'w', 'e', 'r', 't',
        'a', 's', 'd', 'f', 'g',
        'z', 'x', 'c', 'v', 'b',
        '1', '2', '3', '4', '5',
      ];
      break;
    case 'left-hand-only-letters':
      letters = [
        'q', 'w', 'e', 'r', 't',
        'a', 's', 'd', 'f', 'g',
        'z', 'x', 'c', 'v', 'b',
      ];
      break;
    case 'left-hand-only-numbers':
      letters = [
        '1', '2', '3', '4', '5',
      ];
      break;
    case 'right-hand-all':
      letters = [
        'y', 'u', 'i', 'o', 'p',
        'h', 'j', 'k', 'l', ';',
        'n', 'm',
        '6', '7', '8', '9', '0'
      ];
      break;
    case 'right-hand-only-letters':
      letters = [
        'y', 'u', 'i', 'o', 'p',
        'h', 'j', 'k', 'l',
        'n', 'm',
      ];
      break;
    case 'right-hand-only-numbers':
      letters = [
        '6', '7', '8', '9', '0',
      ];
      break;
    case 'both-hands-all':
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
    case 'both-hands-only-letters':
      letters = [
        'q', 'w', 'e', 'r', 't',
        'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g',
        'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b',
        'n', 'm',
      ];
      break;
    case 'both-hands-only-numbers':
      letters = [
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '0',
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
