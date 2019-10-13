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
    let matches, key, value;
    const line = message.split('\n').find(s => s.includes('"E":'));
    matches = line.match(/^\s*"E":\s*"(.*)",\s*$/);
    if (matches) {
      const result = {};
      let str = matches[1];
      const [, type] = str.match(/^<([a-zA-Z0-9]+):/);
      [, str] = str.match(/^<[^;]+; (.*)>\s*$/);
      while ((matches = str.match(/^([a-zA-Z0-9.]+)=(.*?); ([a-zA-Z0-9.]+=.*)$/))) {
        [, key, value, str] = matches;
        result[key] = unquote(value);
      }
      result.type = type;
      result.text = result['AX.label'];
      return result;
    }
  } else if (message.includes('with text: is')) {
    // Android message
    // FIXME: Implement
  }
  throw new Error(
    `Could not parse exception message. detox-getprops library might not be compatible with this version of Detox.\n\nMessage:\n${message}`
  );
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
