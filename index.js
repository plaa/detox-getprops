const { expect } = require('detox');

const getText = async elem => {
  return (await getProps(elem)).text;
};

const getProps = async elem => {
  try {
    await expect(elem).toHaveText('_unfoundable_text');
  } catch (error) {
    const msg = error.message.toString();
    return parseMessage(msg);
  }
  throw new Error('We never should get here unless target element has unfoundable text');
};

const parseMessage = message => {
  if (message.includes('"Description Glossary"')) {
    // iOS message
    if (message.includes('Cannot find UI Element')) {
      throw new Error('Could not find element');
    }
    const line = message.split('\n').find(s => s.includes('"E":'));
    const matches = line.match(/^\s*"E":\s*"<([a-zA-Z0-9-]+):0x[0-9a-fA-F]+; (.*)>",?$/);
    if (matches) {
      const [, type, str] = matches;
      const result = parseLine(str, '; ');
      result.device = 'ios';
      result.type = type;
      result.text = result['AX.label'];
      return result;
    }
  } else if (message.includes('with text: is')) {
    // Android message
    if (message.includes('Got: null')) {
      throw new Error('Could not find element');
    }
    const line = message.split('\n').find(s => s.includes('Got:'));
    const matches = line.match(/^\s*Got: "([a-zA-Z0-9-]+)\{(.*)\}"\s*$/);
    if (matches) {
      const [, type, str] = matches;
      const result = parseLine(str, ', ');
      result.device = 'android';
      result.type = type;
      return result;
    }
  }
  throw new Error(
    `Could not parse exception message. detox-getprops library might not be compatible with this version of Detox.\n\nMessage:\n${message}`
  );
};

const parseLine = (str, separator) => {
  const result = {};
  let matches;
  var re = new RegExp(`^([a-zA-Z0-9.-]+)=(.*?)${separator}([a-zA-Z0-9.-]+=.*)$`);
  while ((matches = str.match(re))) {
    [, key, value, str] = matches;
    result[key] = unquote(value);
  }
  return result;
};

const unquote = str => {
  if (str.match(/^'.*'$/)) {
    return str.substr(1, str.length - 2);
  } else {
    return str;
  }
};

module.exports = {
  getText,
  getProps,
  parseMessage
};
