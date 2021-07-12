/***
 * Change below so that it will also compare data types.
 * ```javascript
 * compareEquality(50, 50); // should return "Equal"
 * compareEquality(50, "50"); // should return "Not Equal"
 * ```
 */
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
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
  // Method 1
  if (age >= 13 && age <= 19) {
    return true;
  }
  return false;

  // Method 2
  return age >= 13 && age <= 19;
}

/**
 * "stringOrNumber" should be true if stringOrNumber is:
 * - a number
 * - a string with numeric characters only (e.g. "5", "1.25", "-4")
 * Use the logical || operator
 * Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumeric(stringOrNumber) {
  // Method 1
  if (typeof stringOrNumber === "number" || isNaN(stringOrNumber) !== true) {
    return true;
  }
  return false;

  // Method 2
  return typeof stringOrNumber === "number" || isNaN(stringOrNumber) !== true;
}

/***
 *  Using conditional logic compare both arguments and return the largest argument
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber;
  if (arg1 > arg2) {
    largestNumber = arg1;
  } else if (arg2 > arg1) {
    largestNumber = arg2;
  }
  return largestNumber;
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  // Method 1
  if (isEven % 2 === 0) {
    return true;
  }
  return false;

  // Method 2
  return isEven % 2 === 0;
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
  switch (num) {
    case 1:
      return "ONE";
    case 2:
      return "TWO";
    case 3:
      return "THREE";
    case 4:
      return "FOUR";
    case 5:
      return "FIVE";
    case 6:
      return "SIX";
    case 7:
      return "SEVEN";
    case 8:
      return "EIGHT";
    case 9:
      return "NINE";
    default:
      return "PLEASE TRY AGAIN";
  }
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
