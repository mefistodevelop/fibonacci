const memoize = require('lodash.memoize');

const calcFibonacci = (number) => {
  let num = number;
  let a = 1;
  let b = 0;
  let temp = 0;

  while (num >= 0) {
    temp = a;
    a += b;
    b = temp;
    num -= 1;
  }
  return b;
};

const memoizedCalcFibonacci = memoize(calcFibonacci);
exports.calc = memoizedCalcFibonacci;
