/***
 * Change below so that it will also compare data types.
 * ```javascript
 * compareEquality(50, 50); // should return "Equal"
 * compareEquality(50, "50"); // should return "Not Equal"
 * ```
 */
function compareEquality(a, b) {
  //a = 5, b = 5
  if (a === b) {
    console.log("Equal");
    return "Equal";
  }
   else if (a !== b);
    console.log("Not Equal");  
    return "Not Equal";
}



/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a !== b) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

/**
 * Given a number "age", return whether or not someone is a teenager
 * This is someone who is between 13 and 19 years old.
 * Use the logical && operator
 */
function isTeenager(age) {
  if (age >= 13 && age < 20) {
    console.log("true");
    return isTeenager;
  }
  else if (age <= 13 && age >= 20); {
    console.log("false");
    return age;
  } 
}
  // Return something here
  


/**
 * "stringOrNumber" should be true if stringOrNumber is:
 * - a number
 * - a string with numeric characters only (e.g. "5", "1.25", "-4")
 * Use the logical || operator
 * Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumeric(stringOrNumber) {
  const isNumber = true;
  const isString = false;
  const isStringNumOnly = true;
  
    if (isNumber || isString || isStringNumOnly) {
    console.log("true"); 
    return stringOrNumber; 
  }
  }
  
   // Return something here


/***
 *  Using conditional logic compare both arguments and return the largest argument
 */

function getLargerNumber(arg1, arg2) {
  // console.log(arg1);
  // console.log(arg2);
  let largestNumber = arg2;
  let smallestNumber = arg1;

  if (arg1 <= arg2) {
    console.log(largestNumber);
  }
  return largestNumber;
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  console.log(isEven);
  
  return (isEven); 
 // return something here
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
  console.log(num);
  let newNumber = "";
  newNumber = "ONE";
    if (num == newNumber) {
      console.log(num.toString(1));  
    }
   return num; 
  }
  


export {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  isTeenager,
  isNumeric,
  getLargerNumber,
  caseInSwitch,
};
