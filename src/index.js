
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  matrix.forEach((item, index) => {
    if (index % 2 == 0) {
      return item;
    } else {
      return item.reverse();
    }
  });
  return matrix.flat();
};

