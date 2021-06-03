function shiftChar(aChar, n) {
  let lowerCaseRe = /[a-z]/;
  let upperCaseRe = /[A-Z]/;

  let charCode = aChar.charCodeAt(0);

  let aCharCode = "a".charCodeAt();
  let zCharCode = "z".charCodeAt();
  let ACharCode = "A".charCodeAt();
  let ZCharCode = "Z".charCodeAt();

  let shiftedCode = charCode;

  // Handle when the shiftAmount wraps the entire alphabet
  let shiftAmount = n % 26;

  if (lowerCaseRe.test(aChar)) {
    if (shiftAmount >= 0) {
      shiftedCode = charCode + shiftAmount;
      if (shiftedCode > zCharCode) {
        shiftedCode = shiftedCode - zCharCode + aCharCode - 1;
      }
    } else {
      shiftedCode = charCode + shiftAmount;
      if (shiftedCode < aCharCode) {
        shiftedCode = zCharCode - (aCharCode - shiftedCode) + 1;
      }
    }
  }

  if (upperCaseRe.test(aChar)) {
    if (shiftAmount >= 0) {
      shiftedCode = charCode + shiftAmount;
      if (shiftedCode > ZCharCode) {
        shiftedCode = shiftedCode - ZCharCode + ACharCode - 1;
      }
    } else {
      shiftedCode = charCode + shiftAmount;
      if (shiftedCode < ACharCode) {
        shiftedCode = ZCharCode - (ACharCode - shiftedCode) + 1;
      }
    }
  }

  return String.fromCharCode(shiftedCode);
}

const caesar = function (str, n) {
  let splitChars = str.split("");

  let shiftChars = [];
  for (let i = 0; i < splitChars.length; i++) {
    shiftChars.push(shiftChar(splitChars[i], n));
  }

  return shiftChars.join("");
};

module.exports = caesar;
