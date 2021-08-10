/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = (arr) => {
  let newArray = [];
  for (let item of arr) {
    const first = item[0];
    const last = item[item.length - 1];
    newArray.push(`${first}${last}`);
  }
  return newArray;
};
