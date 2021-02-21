const repeatString = function (str, num) {
  let output = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    output += str;
  }
  return output;
};

//console.log(repeatString("hey", 3));

module.exports = repeatString;
