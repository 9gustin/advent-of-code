const { getInput, splitBreakLine } = require('./utils');

const allFields =  splitBreakLine(getInput(3));

const lowerCaseMinus = "a".charCodeAt() - 1;
const upperCaseMinus = "A".charCodeAt() - 27;

const value = allFields.reduce((total, actual) => {
  const left = actual.substr(0, actual.length / 2);
  const right = actual.replace(left, "");

  const sameLetter = [...right].find(letter => left.includes(letter));

  let priority = 0;
  if (sameLetter === sameLetter.toLowerCase()) {
    priority = sameLetter.charCodeAt() - lowerCaseMinus;
  } else {
    priority = sameLetter.charCodeAt() - upperCaseMinus;
  }

  return total + priority
}, 0)

console.log(value)