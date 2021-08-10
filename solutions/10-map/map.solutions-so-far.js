/**
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */
// Solution 1
const doubleValues = (arr) => {
  return arr.map((num) => {
    return num * 2;
  });
};
// Solution 2
const doubleValues = (arr) => arr.map((num) => num * 2);
