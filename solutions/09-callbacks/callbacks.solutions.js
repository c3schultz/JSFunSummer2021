/**
 * Perform a calculation on a number.
 * @param {number} num1 number
 * @param {number} num2 number
 * @param {function} callback that performs an operation on two numbers
 * @returns {number} that is the result of a callback
 *
 * callback
 * @param {number} num1 number
 * @param {number} num2 number
 * @returns {number} that is the result of a calculation like add or subtract
 *
 * @example
 * const add = (a, b) => {
 *   return a + b;
 * }
 * const subtract = (a, b) => {
 *   return a - b;
 * }
 * console.log( calculate(5, 10, add) ); // 15
 * console.log( calculate(7, 3, subtract) ); // 4
 */

const calculate = (num1, num2, callback) => {
  return callback(num1, num2);
};

/**
 * Create a function called "printer".
 * Given a student name, it should format and prints out the value in a visually appealing way
 * (e.g. with hyphens or asterisks before each value) with `console.log`
 * slide
 * @example
 *  - Jamal
 *  - Matina
 * @param {string} name instructor name
 */
const printer = (name) => {
  console.log(`- ${name}\n`);
};

/**
 * NOTE that the test will use the "printer" function that you completed in the problem above.
 * Loop through the array of strings.
 * For each name, calls upon the function "printer" to print out the name
 * @param {array}
 * @param {function} callback printer function
 *
 * @example
 * printNames(["Jamal", "Matina"], printer);
 * // - Jamal
 * // - Matina
 */
const printNames = (array, callback) => {
  for (let item of array) {
    callback(item);
  }
};

/**
 * Returns the first number in an array that meets a condition.
 * @param {array} arrayOfNum e.g. [3,4, 20, 333]
 * @param {function} callback that receives a number and returns true or false
 * @returns {number} in the array that is the result of the callback
 *
 * callback
 * @param {number} num an item in an array
 * @returns {boolean} if a number meets a condition
 *
 * @example
 * const isNumberEven = (num) => {
 *   if (num % 2 === 0) return true;
 *   else return false;
 * };
 * const isNumberTwoDigits = (num) => {
 *   if (`${num}`.length === 2) {
 *     return true;
 *   } else return false;
 * };
 * console.log( findFirst([1, 3, 7, 8, 20], isNumberEven) ) // 8
 * console.log( findFirst([4, 500, 30, 2], isNumberTwoDigits) ) // 30
 */

const findFirst = (arrayOfNum, callback) => {
  // Solution 1
  for (let i = 0; i < arrayOfNum.length; i++) {
    if (callback(arrayOfNum[i])) return arrayOfNum[i];
  }

  // Solution 2
  for (let num of arrayOfNum) {
    if (callback(num)) return num;
  }
};

/**
 * Ignore everything below this line. It is for the tests.
 */
const myExports = {
  calculate,
  printer: undefined,
  printNames,
  findFirst,
};
try {
  //eslint-disable-next-line no-undef
  if (printer) myExports.printer = printer;
  // eslint-disable-next-line no-undef
} catch (e) {}

export default myExports;
