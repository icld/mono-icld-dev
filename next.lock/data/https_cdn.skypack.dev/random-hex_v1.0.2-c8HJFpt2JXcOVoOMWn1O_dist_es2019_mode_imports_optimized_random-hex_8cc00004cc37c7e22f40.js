var generate = function() {
  var random = Math.random();
  var exponent = --random.toExponential().split("-")[1];
  random *= Math.pow(10, exponent);
  return "#" + (~~(random * (1 << 24))).toString(16);
};
var randomHex = {
  generate
};
export default randomHex;
export {randomHex as __moduleExports, generate};
