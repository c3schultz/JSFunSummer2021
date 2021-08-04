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
