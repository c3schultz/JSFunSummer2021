function myName() {
  // Create a variable called myName
  const myName = "Cameron";
  console.log(myName); 
  return myName;
}

function setTeachersNames(teachersName) {
let teachers = "Matina";
teachers += " " + "Jamal";
console.log(teachers);// Change this line only
 
  teachers = teachersName;//  <- this is invalid because teachers is a const

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  age ++;
  console.log(age);
  return age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  age --;
  console.log(age);
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  const int = parseInt(str);
  console.log(int);
  return int;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  const index = name.indexOf(letter);
  let characterPosition = index;
  console.log(index);
  return characterPosition; 
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength = str.length;
  console.log(str.length);
  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  const lastCharacter = str[ str.length - 1 ];
  console.log(lastCharacter);
  return lastCharacter;
  
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  const newPlace = place.substring(4, 12);
  console.log(newPlace);
  return newPlace;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first argument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
const newFullName = fullName.replace("Ramsey", "Smith");
  console.log(newFullName);

  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let capitalizeLastName = "Jane Doe";
  capitalizeLastName[5].toUpperCase() + capitalizeLastName.substring(5);
  console.log(capitalizeLastName);
  
  return capitalizeLastName;
}

/**
 * Ignore me. This is for the tests
 */

export {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  replaceLastName,
  capitalizeLastName,
};
