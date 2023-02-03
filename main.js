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
