import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from './main';

describe('capatilize module', () => {
  test('capitalize the word test to be Test', () => {
    expect(capitalize('test')).toBe('Test');
  });
});

describe('reverseString module', () => {
  test('reverse the String Test to be tseT', () => {
    expect(reverseString('Test')).toBe('tseT');
  });
});

describe('calculator object', () => {
  test('add the number 1 and 2 tobe 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtract the number 9 and 8 tobe 1', () => {
    expect(calculator.subtract(9, 8)).toBe(1);
  });
  test('divide 6 by 3 tobe 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
  test('multiplay 4 by 4 tobe 16', () => {
    expect(calculator.multiply(4, 4)).toBe(16);
  });
});

describe('ceasarCipher module', () => {
  test('convert Zorry my FriNd. with shift 9 to Ixaah vh OarWm.', () => {
    expect(ceasarCipher('Zorry my FriNd.', 9)).toBe('Ixaah vh OarWm.');
  });
});

describe('analyzeArray module', () => {
  test('convert [1,8,3,4,2,6] into abject with sth.', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
