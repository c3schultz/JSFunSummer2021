/**
 *  Return the first item in an array of cars
 *  @return {string} BMW
 */

const accessingAnItem = () => {
  const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
  // Write code here
  console.log(cars[0]);
  return cars[0];
};

/**
 * Add three more programming languages and return the languages array
 * @return {array} an array with four items
 * @example addToAnArray() // ["JavaScript", "Python", "Java", "PHP"]
 */

const addToAnArray = () => {
  const languages = ["JavaScript"]; // Do not change this line
    languages.push("Python", "Java", "PHP");
  /* Add three more items to the "languages" array here */

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
  const array = [...array1, ...array2];
  return array;
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
const addNum = (num, num1) => {
  return num + num1;
};
const subtractNum = (num, num1) => {
  return num - num1;
};

const createArrayOfFunctions = () => {
  const numbersArray = [addNum, subtractNum];
  return numbersArray;
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
  
  let highest = numbers[0] || null;
  let number = null;
  
    for (let i = 0; i < numbers.length; i++) {
      number = numbers[i];
      highest = Math.max(highest, number);
    }
    
      return highest;
      
  
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
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === id) break; 
      return arr[i];
  }     
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
  const myStr = str.split("");
  const reverseMyArr = myStr.reverse(str);
  const reverseMyStr = reverseMyArr.join("");
    if (str == reverseMyStr) {
     return true;
     }  
     return false;
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
  let setOne = new Set (numbers);
  let numberArray = [...setOne];
  return numberArray;
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
