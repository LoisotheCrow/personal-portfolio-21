import errorMessages from './errorMessages';

const wrap = (text = '', offset = '') => `{\n${text}\n${offset}}`;

const makeStringReducer = (obj, offset) => (accumulator, current) => {
  const currentText = objToText(obj[current], false, offset);
  const currentTextFormatted = `${offset}${current}: ${currentText}`;
  if (!accumulator) {
    return currentTextFormatted;
  }
  return `${accumulator}\n${currentTextFormatted}`;
};

const objToText = (obj, strict = true, offset = '') => {
  if (!obj) {
    return 'undefined';
  }

  if (typeof obj !== 'object') {
    if (!strict) {
      return obj.toString ? obj.toString() : obj;
    }
    throw new Error(
      errorMessages.typeWrong('object', typeof obj, 'object to text converter'),
    );
  }

  const keys = Object.keys(obj);
  if (!keys) {
    return wrap();
  }

  const newOffset = offset + '  ';
  return wrap(keys.reduce(makeStringReducer(obj, newOffset), ''), offset);
};

export default objToText;
