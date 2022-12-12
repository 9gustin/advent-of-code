const { getInput,splitBreakLine } = require('./utils');

const instructions = splitBreakLine(getInput(7));
const byDisk = {};

const value = instructions.reduce();
 