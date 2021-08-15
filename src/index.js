
exports.min = function min(array) {
  if (Object.keys(array).length == 0) {
    return 0;
  } else {
    return Math.min.apply(Math, array);
  }
}

exports.max = function max(array) {
  return Math.max.apply(Math, array);
  return 0;
}

exports.avg = function avg(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++)
    result += array[i];
  return (result / array.length);
  return 0;
  };

