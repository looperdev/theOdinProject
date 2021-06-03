function add(...args) {
  return args.reduce(function (acc, cur) {
    return acc + cur;
  });
}

function subtract(...args) {
  return args.reduce(function (result, cur) {
    return result - cur;
  });
}

function sum(arr) {
  return arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

function multiply(arr) {
  return arr.reduce(function (acc, cur) {
    return acc * cur;
  });
}

function power(a, b) {
  return a ** b;
}

function factorial(n) {
  if (n < 0) {
    return NaN;
  } else if (n == 0) {
    return 1;
  } else {
    let input = [...Array(n + 1).keys()].slice(1);
    return multiply(input);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
