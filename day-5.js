const { getInput, splitEmptyLine, splitBreakLine } = require('./utils');

const [info, movements] = splitEmptyLine(getInput(5));

const lastRow = splitBreakLine(info).at(-1);
const indexes = [...lastRow].filter(nIndex => nIndex.trim());
const rows = splitBreakLine(info.replace(lastRow, ""));

const mappedIndexs = indexes.map(n => [
  n,
  [...lastRow].findIndex(i => i === n)
]);


const wItValues =Object.fromEntries(mappedIndexs.map(([n, index]) => [
  Number(n),
  rows.map(value => value[index]).filter(value => value && value.trim()),
]))

splitBreakLine(movements).map(move => {
  const [q, from, to] = move.split(/\D/g).filter(Boolean);

  return [q, from, to].map(Number);
}
).forEach(([q, from, to]) => {
  let rowFrom = wItValues[from];
  let rowTo = wItValues[to];
  rowTo = [...rowFrom.splice(0, q).reverse(), ...rowTo];

  wItValues[from] = rowFrom;
  wItValues[to] = rowTo;
});

const value = Object.keys(wItValues).map((key) => wItValues[key][0]).join('')

console.log(value)
console.log(wItValues)