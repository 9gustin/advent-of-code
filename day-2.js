const { getInput, splitBreakLine } = require('./utils');

const map = {
  Rock: 'A',
  Paper: 'B',
  Scissors: 'C'
}

const mapResponse = {
  Rock: 'X',
  Paper: 'Y',
  Scissors: 'Z',
}

const pointsPerChoice = {
  X: 1,
  Y: 2,
  Z: 3,
}

const extra = {
  lost: 0,
  draw: 3,
  won: 6,
}

const getPoints = (otherChoice, myChoice) => {
  let points = 0;
  if (
    (otherChoice === map.Rock && myChoice === mapResponse.Scissors)
    || (otherChoice === map.Scissors && myChoice === mapResponse.Paper)
    || (otherChoice === map.Paper && myChoice === mapResponse.Rock)
  ) {
    points += extra.lost;
  } else if (
    (otherChoice === map.Rock && myChoice === mapResponse.Rock)
    || (otherChoice === map.Scissors && myChoice === mapResponse.Scissors)
    || (otherChoice === map.Paper && myChoice === mapResponse.Paper)
  ) {
    points += extra.draw;
  } else {
    points += extra.won;
  }

  return points + pointsPerChoice[myChoice];
}

const allGames = splitBreakLine(getInput(2));
const points = allGames.reduce((total, actualGame) => total + getPoints(...actualGame.split(' ')), 0);

console.log(points)