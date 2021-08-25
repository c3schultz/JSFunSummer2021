/**
 * THIS IS AN OPTIONAL ASSIGNMENT!
 */

/**
 * Build your own filter function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a array of values with the values with some of the values removed
 */
const filter = (arr, callback) => {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) newArray.push(arr[i]);
  }
  return newArray;
};

/**
 * Delete the matching user from an array of user objects.
 * Use .filter() to solve this problem.
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the array of user objects, but the user object with the matching id is removed
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // [{ id: 1024, username:"smile134", email: "smile134@example.com" }]
 */

// Solution 1
const deleteUser = (arr, id) => {
  return arr.filter((user) => {
    if (user.id === id) return false;
    return true;
  });
};
// Solution 2
const deleteUser = (arr, id) => arr.filter((user) => user.id !== id);

/**
 * Build your own find function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a single value in the array
 */
const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
};

/**
 * Find and return the matching user in an array of user objects.
 * Use.find() to solve this problem.
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the user object that has the matching id
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // { id: 1025, username:"newyorkfarmer", email: "johndoe@example.com" }
 */

// Solution 1
const findUser = (arr, id) => {
  return arr.find((user) => {
    if (user.id === id) return true;
    else return false;
  });
};
// Solution 2
const findUser = (arr, id) => arr.find((user) => user.id === id);

/**
 * Given an array of numbers, return the sum.
 * Use reduce() to solve this problem.
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */

// Solution 1
const addItems = (arr) => {
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
};
// Solution 2
const addItems = (arr) => arr.reduce((sum, number) => sum + number);

/**
 * Create a function that flattens an array (that is, it should "unnest" a nested array).
 * Use reduce() to solve this problem.
 * @param {array} array e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 */
const flattenArray = (array) =>
  array.reduce((flattenedArray, currArray) => [
    ...flattenedArray,
    ...currArray,
  ]);

/**
 * Create a function that tallies the number of each kind of "thing" within the array
 * @param {array} array e.g. `['Apple', 'Orange', 'Apple', 'Blueberry']`
 * @returns {object} where the thing name is the key and the tally is the value
 * @example
 *   let fruits = ['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'];
 *   generateTally(generateTally); // {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 */
const generateTally = (array) => {
  return array.reduce((tally, item) => {
    if (tally[item]) tally[item] += 1;
    else tally[item] = 1;
    return tally;
  }, {});
};

/**
 * Use reduce() to solve this problem.
 * Create a function, that when given an array of object literals, will index the object literals by a single column
 * (in this case, the ID). The function should return an object where the ID is the key and value is the the
 * object literal.
 *
 * @param {array} arr an array of nested objects, where each object as a key called "ID"
 * @returns {object} an object where the key is the ID and the value is the entire nested object
 * @example
 *
 * let people = [
 *  {id: 123, name: 'Dave', age: 23},
 *  {id, 456, name: 'Rachel', age: 35}
 * ];
 *
 * let result =  arrayToObject();
 *
 * // result should be:
 * {
 *   123: {id: 123, name: 'Dave', age: 23},
 *   456: {id, 456, name: 'Rachel', age: 35}
 * }
 */
const arrayToObject = (arr) => {
  return arr.reduce((obj, person) => {
    obj[person.id] = person;
    return obj;
  }, {});
};

export {
  filter,
  deleteUser,
  find,
  findUser,
  addItems,
  flattenArray,
  generateTally,
  arrayToObject,
};
