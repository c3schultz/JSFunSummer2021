/**
 * Use arrow syntax in all of your answers
 */

/**
 * Create a function named called "printGreeting".
 * It should accept a name and return "Hello ______!"
 * @example printGreeting("Tim"); // Hello Tim!
 */

const printGreeting = (name) => {
  return `Hello ${name}!`; // Or "Hello " + name + "!";
};

/**
 * Create a function named "timesFive". It should multiply a number by 5.
 * @example timesFive(5); // 25
 * @example timesFive(2); // 10
 * @example timesFive(0); // 0
 */

const timesFive = (num) => {
  return num * 5;
};

/**
 * Create a function called "lowerCaseName".
 * If given a string, it should return the string lower cased.
 * @example lowerCaseName("HELLO WORLD"); // hello world
 *
 * If given a value that is not a string, this function should not throw an error. HINT: you will need to exit out of the function early.
 * @example lowerCaseName(); // undefined (should not throw an error)
 * @example lowerCaseName(null); // undefined (should not throw an error)
 */

const lowerCaseName = (str) => {
  if (typeof str !== "string") return;
  return str.toLowerCase();
};

/**
 * Create a function called "isEvenOrOdd".
 * If given an even number, it should return "even".
 * If given an odd number, it should return "odd".
 * @example isEvenOrOdd(10); // even
 * @example isEvenOrOdd(3); // odd
 */

const isEvenOrOdd = (num) => {
  // If there isn't a remainder when I divide by 2, then the number is even
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
};

/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 * @example countNumberOfDigits(5000); // 4
 */

const countNumberOfDigits = (num) => {
  const string = `${num}`; // This converts a number to a string so that we can count the number of characters
  return string.length;
};

/**
 * Ignore everything below this line. This is for the tests.
 */
let myExports = {
  printGreeting: undefined,
  timesFive: undefined,
  lowerCaseName: undefined,
  isEvenOrOdd: undefined,
  countNumberOfDigits: undefined,
};
try {
  //eslint-disable-next-line no-undef
  if (printGreeting) myExports.printGreeting = printGreeting;
  // eslint-disable-next-line no-undef
} catch (e) {}

try {
  //eslint-disable-next-line no-undef
  if (timesFive) myExports.timesFive = timesFive;
  // eslint-disable-next-line no-undef
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (lowerCaseName) {
    // eslint-disable-next-line no-undef
    myExports.lowerCaseName = lowerCaseName;
  }
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (isEvenOrOdd) {
    // eslint-disable-next-line no-undef
    myExports.isEvenOrOdd = isEvenOrOdd;
  }
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (countNumberOfDigits) {
    // eslint-disable-next-line no-undef
    myExports.countNumberOfDigits = countNumberOfDigits;
  }
} catch (e) {}

export default myExports;
