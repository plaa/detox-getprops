const { parseMessage } = require('./index');
const { iosMessages, androidMessages } = require('./exampleMessages');

describe('parseMessage', () => {
  it('should parse iOS matching string', () => {
    Object.entries(iosMessages).forEach(([text, input]) => {
      const output = parseMessage(input);
      expect(output.text).toEqual(text);
      expect(output).toMatchSnapshot();
    });
  });

  it('should parse Android matching string', () => {
    Object.entries(androidMessages).forEach(([text, input]) => {
      const output = parseMessage(input);
      expect(output.text).toEqual(text);
      expect(output).toMatchSnapshot();
    });
  });

  it('should throw error on unknown strings', () => {
    expect(() => parseMessage('foo')).toThrow();
  });
});
