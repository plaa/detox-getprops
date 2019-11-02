jest.mock('detox');

const { expect: expectDetox } = require('detox');
const { getText, getProps, parseMessage } = require('./index');
const { iosMessages, androidMessages } = require('./exampleMessages');

describe('getText', () => {
  it('should return iOS text', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error(iosMessages['Step, One']);
    });
    const text = await getText(elem);
    expect(text).toEqual('Step, One');
  });

  it('should return Android text', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error(androidMessages['Step, One']);
    });
    const text = await getText(elem);
    expect(text).toEqual('Step, One');
  });

  it('should throw exception for unknown exception messages', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error('Something');
    });
    let threw = false;
    try {
      await getText(elem);
    } catch (e) {
      threw = true;
    }
    expect(threw).toBeTruthy();
  });
});

describe('getProps', () => {
  it('should return iOS props', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error(iosMessages['Step, One']);
    });
    const props = await getProps(elem);
    expect(props).toMatchSnapshot();
  });

  it('should return Android props', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error(androidMessages['Step, One']);
    });
    const props = await getProps(elem);
    expect(props).toMatchSnapshot();
  });

  it('should throw exception for unknown exception messages', async () => {
    const elem = 'boom';
    expectDetox.mockImplementation(() => {
      throw new Error('Something');
    });
    let threw = false;
    try {
      await getProps(elem);
    } catch (e) {
      threw = true;
    }
    expect(threw).toBeTruthy();
  });
});

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
