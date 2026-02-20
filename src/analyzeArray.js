export function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
}

function getAverage(arr) {
  const total = arr.reduce((acc, current) => acc + current, 0);
  return total / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getLength(arr) {
  return arr.length;
}
