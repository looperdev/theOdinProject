const removeFromArray = function (arr, ...args) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {
      output.push(arr[i]);
    }
  }

  return output;
};

module.exports = removeFromArray;
