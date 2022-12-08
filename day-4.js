const { getInput, splitBreakLine } = require('./utils');

const allFields = splitBreakLine(getInput(4));

const value = allFields.reduce((total, current) => {
  const [left, right] = current.split(',').map(assignment => assignment.split('-').map(Number));
  const rightContains = right[0] <= left[0] && right[1] >= left[1];
  const leftContains = left[0] <= right[0] && left[1] >= right[1];

  if (
    rightContains || leftContains
  ) {
    return total+1;
  }

  return total;
}, 0)

console.log(value);