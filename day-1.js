const { getInput, splitEmptyLine, splitBreakLine } = require('./utils');

const elfs = splitEmptyLine(getInput(1));

const result = elfs.reduce((total, actualElf) => {
    const calories = splitBreakLine(actualElf).reduce((total, actual) => Number(actual) + total, 0);
    return total > calories ? total : calories;
}, 0)

console.log(result)