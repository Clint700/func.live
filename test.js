const { encodeToBase64 } = require('./model');

describe('Base64 Encoding', () => {
  test('Encodes a string to Base64', () => {
    const input = "Hello, world";
    const expectedOutput = "SGVsbG8sIHdvcmxk";
    expect(encodeToBase64(input)).toBe(expectedOutput);
  });

  test('Throws error for undefined input', () => {
    expect(() => encodeToBase64()).toThrow();
  });
});