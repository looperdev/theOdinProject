const reverseString = function (str) {
  let splitChars = str.split("");

  let output = [];
  for (let i = 0; i < splitChars.length; i++) {
    output.unshift(splitChars[i]);
  }
  return output.join("");
};

module.exports = reverseString;
