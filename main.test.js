import { capitalize } from './main';

describe('capatilize module', () => {
  test('capitalize the word test to be Test', () => {
    expect(capitalize('test')).toBe('Test');
  });
});
