/**
 *  Return the first item in an array of cars
 *  @return {string} BMW
 */

const accessingAnItem = () => {
  const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
  return cars[0];
};

/**
 * Add three more programming languages and return the languages array
 * @return {array} an array with four items
 * @example addToAnArray() // ["JavaScript", "Python", "Java", "PHP"]
 */

const addToAnArray = () => {
  const languages = ["JavaScript"]; // Do not change this line

  /* Add three more items to the "languages" array here */

  // Method 1
  languages.push("Python");
  languages.push("Java");
  languages.push("PHP");

  // Method 2
  languages = [...languages, "Python", "Java", "PHP"];

  return languages;
};

/**
 * Combine an array by using the spread operator
 * @param {array} array1
 * @param {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

const combineArray = (array1, array2) => {
  return [...array1, ...array2];
};

/***
 * Create an array that contain two functions:
 * 1) the first function should add two arguments
 * 2) the second function should subtract two arguments
 * @returns {array} an array of functions
 *
 * @example createArrayOfFunctions()[0](10, 10) // 20;
 * @example createArrayOfFunctions()[1](10, 10) // 0;
 */

const createArrayOfFunctions = () => {
  let array = [(num1, num2) => num1 + num2, (num1, num2) => num1 - num2];
  return array;
};

/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 **/
const highestNumber = (numbers) => {
  // Method 1: For loop
  let highest;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num > highest || highest === undefined) highest = num;
  }
  return highest;

  // Method 2: For ... of loop
  let highest;
  for (let num of numbers) {
    if (num > highest || highest === undefined) highest = num;
  }
  return highest;

  // Method 3
  return Math.max(...numbers);
};

/**
 * Given an array of objects, where each object has an ID,
 * loop through an array using a for loop (or for ... of loop).
 * Return the object that matches a given ID.
 *
 * Once the object is found, you must break out of the loop for optimization purposes.
 * To Pass this challenge, break must be used.
 *
 * @param  {array} arr
 * @param  {number} id
 * @returns {object} with the matching id
 *
 * @example
 * const people = [{
 *    id: 10,
 *    firstName: 'John',
 *    lastName: 'Smith'
 * },{
 *    id: 20,
 *    firstName: 'Cookie',
 *    lastName: 'Monster'
 * },{
 *    id: 30,
 *    firstName: 'Jane',
 *    lastName: 'Doe'
 * }
 * },{
 *    id: 40,
 *    firstName: 'Tom',
 *    lastName: 'Hardy'
 * }];
 * findAndAbort(people, 20); // { id: 20, firstName: 'Cookie', lastName: 'Monster' }
 *
 * Please note, the loop never iterates over the last item, because we found our object. There is no need to continue looping.
 */

const findAndAbort = (arr, id) => {
  // Method 1: For loop
  let match;
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    if (person.id === id) {
      match = person;
      break;
    }
  }
  return match;

  // Method 2: For ... of loop
  let match;
  for (let person of arr) {
    if (person.id === id) {
      match = person;
      break;
    }
  }
  return match;
};

/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {Boolean}
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (str) => {
  // Method 1
  let letters = str.split("");
  let reverse = "";
  for (let letter of letters) {
    reverse = letter + reverse;
  }
  if (reverse === str) {
    return true;
  }
  return false;

  // Method 2
  const reverse = str.split("").reverse().join("");
  return reverse === str;
};

/**
 * Use sets to remove duplicate elements from an array
 * @return {array} of numbers
 * @example
 * const array = [
    2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5,
  ];
 * removeDuplicates(); // [2, 3, 4, 5, 6, 7, 32]
 */

const removeDuplicates = (numbers) => {
  const mySet = new Set(numbers);
  return [...mySet];
};

export {
  addToAnArray,
  accessingAnItem,
  highestNumber,
  isPalindrome,
  combineArray,
  removeDuplicates,
  createArrayOfFunctions,
  findAndAbort,
};
