const { device, expect } = require('detox');

const fetchText = async elem => {
  try {
    await expect(elem).toHaveText('_unfoundable_text');
    throw new Error('We never should get here unless target element has unfoundable text');
  } catch (error) {
    if (device.getPlatform() === 'ios') {
      const start = `accessibilityLabel was "`;
      const end = '" on ';
      const errorMessage = error.message.toString();
      const [, restMessage] = errorMessage.split(start);
      const [label] = restMessage.split(end);
      return label;
    } else {
      // Android to be tested
      const start = 'Got:';
      const end = '}"';
      const errorMessage = error.message.toString();
      if (errorMessage.match(/Got: null/)) {
        return null;
      }
      const [, restMessage] = errorMessage.split(start);
      const [label] = restMessage.split(end);
      // console.log('errorMessage=' + errorMessage);
      // console.log('label=' + label);
      const value = label.split(',');
      const combineText = value.find(i => i.includes('text=')).trim();
      const [, elementText] = combineText.split('=');
      return elementText;
    }
  }
};

const parseMessage = message => {
  if (message.includes('"Description Glossary"')) {
    // iOS message
    let key, value;
    const line = message.split('\n').find(s => s.includes('"E":'));
    const matches = line.match(/^\s*"E":\s*"<([a-zA-Z0-9-]+):0x[0-9a-fA-F]+; (.*)>",?$/);
    if (matches) {
      const [, type, str] = matches;
      const result = parseLine(str, '; ');
      result.type = type;
      result.text = result['AX.label'];
      return result;
    }
  } else if (message.includes('with text: is')) {
    // Android message
    const line = message.split('\n').find(s => s.includes('Got:'));
    const matches = line.match(/^\s*Got: "([a-zA-Z0-9-]+)\{(.*)\}"\s*$/);
    if (matches) {
      const [, type, str] = matches;
      const result = parseLine(str, ', ');
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

const getTextBetween = (str, start, end) => {
  const [, restMessage] = str.split(start);
  const [label] = restMessage.split(end);
  return label;
};

module.exports = {
  fetchText,
  parseMessage
};
