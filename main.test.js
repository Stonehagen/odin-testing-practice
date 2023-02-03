import { capitalize, reverseString } from './main';

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
