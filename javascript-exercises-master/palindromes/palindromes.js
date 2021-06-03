const palindromes = function (str) {
  let lcase = str.toLowerCase();
  let re = /[^a-zA-Z]/gi;
  let cleanStr = lcase.replace(re, "");
  let reverseStr = cleanStr.split("").reverse().join("");

  return cleanStr === reverseStr;
};

module.exports = palindromes;
