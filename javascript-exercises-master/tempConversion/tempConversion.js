const ftoc = function (numFarenheit) {
  //[°F] = [°C] × ​9⁄5 + 32
  //[°C] = ([°F] − 32) × ​5⁄9
  return Number((((numFarenheit - 32.0) * 5) / 9).toFixed(1));
};

const ctof = function (numCelsius) {
  return Number(((numCelsius * 9) / 5 + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
