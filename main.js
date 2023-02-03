export const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

export const reverseString = (string) => string.split('').reverse().join('');

export const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

export const ceasarCipher = (string, shift) => {
  // 0 -25
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperLetters = letters.map((letter) => letter.toUpperCase());
  const stringArr = string.split('');
  const ceasarStringArr = stringArr.map((char) => {
    if (letters.includes(char)) {
      let index = letters.indexOf(char);
      index += shift;
      index = index > 25 ? (index % 25) - 1 : index;
      return letters[index];
    }
    if (upperLetters.includes(char)) {
      let index = upperLetters.indexOf(char);
      index += shift;
      index = index > 25 ? (index % 25) - 1 : index;
      return upperLetters[index];
    }
    return char;
  });

  return ceasarStringArr.join('');
};
