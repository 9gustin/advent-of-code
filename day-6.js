const { getInput, splitEmptyLine, splitBreakLine } = require('./utils');


const input = getInput(6).trim();
const lastNonRepeated = 4;
let value = 0;

for(index = 0; [...input]; index++) {
  const part = input.substring(index, index + lastNonRepeated);
  const hasRepeated = [...part].some(letter => {
    return part.replace(letter, "").includes(letter);
  })

  if(!hasRepeated) {
    value = index + lastNonRepeated;
    break;
  }
}

console.log(value);