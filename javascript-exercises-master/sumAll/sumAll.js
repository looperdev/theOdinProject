const sumAll = function (num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  if (min < 0) return "ERROR";

  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
