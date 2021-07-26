/**
 * Make an object "myDog" that represents a dog. It should contain the properties:
 * "name", "legs", "tails" and "owners".
 * Each should have a value.
 * "owners" should be an array with a list of owner names.
 * @return {object}
 */

const createDogObject = () => {
  return {
    name: "Sparky",
    legs: 8,
    tails: 2,
    owners: ["Tim Burton"],
  };
};

/**
 *  CreateGraduateObject function takes in several arguments and combines them together in one object.
 *
 * @param {string} name
 * @param {number} graduationYear
 * @param {array} skills
 * @param {string} githubLink
 * @param {string} linkedInLink
 *
 * @returns {Object} with the properties "name", "graduationYear", "skills" and "links".
 * "links" should be an object with the properties "github" and "linkedIn".
 *
 * @example
 * const graduateObject = createGraduateObject("Eddie Willard", 2020, [ "Javascript", "React", "CSS" ], "https://github.com/example/profile", "https://linkedin.com/profile");
 *
 * console.log(graduateObject); //
 * {
 *   name: "Eddie Willard",
 *   graduationYear: 2021,
 *   skills: ["JavaScript", "React", "CSS"],
 *   links: {
 *     github: "https://github.com/example/profile",
 *     linkedIn: "https://linkedin.com/profile"
 *   }
 * }
 */

const createGraduateObject = (
  name,
  graduationYear,
  skills,
  githubLink,
  linkedInLink
) => {
  return {
    name,
    graduationYear,
    skills,
    links: { github: githubLink, linkedIn: linkedInLink },
  };
};

/**
 * Return the value for hat inside of the clothes object
 * @return {string} ballcap
 * @example accessAnItemObject(); // ballcap
 */

const accessAnItemObject = () => {
  // Do not change clothes here
  let clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
  };
  // Only change this return statement
  return clothes.hat;
};

/**
 * Update the object to contain your first and last name.
 * Add at least three skills inside the array
 * @return {object} student
 * @example updateStudentObject()
   // {
    firstName: "Jamal",
    lastName: "Taylor",
    skills: ["JavaScript", "Teaching", "Being a permanent student"],
  }
 */

const updateStudentObject = () => {
  // Do not change student here
  let student = {
    firstName: "",
    lastName: "",
    skills: [],
  };
  // Write code here
  student.firstName = "Jamal";
  student.lastName = "Taylor";
  student.skills = ["JavaScript", "Teaching", "Being a permanent student"];
  return student;
};

/**
 * Using Object.keys, return all the properties contained in the object.
 * @return {array}
 * @example returnObjectValues(); // [1, 4, "Stacy", "Rocket"]
 */

const returnObjectValues = () => {
  // Do not change dog here
  let dog = {
    tail: 1,
    legs: 4,
    owner: "Stacy",
    name: "Rocket",
  };
  // Add code here
  // HINT: you need to return an array
  return Object.values(dog);
};

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 * @example
 * const obj1 = { firstName: "Clark" }
 * const obj2 = { lastName: "Kent" }
 * combineObject(obj1, obj2); // { firstName: "Clark", lastName: "Kent" }
 */

const combineObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

export {
  createDogObject,
  createGraduateObject,
  updateStudentObject,
  returnObjectValues,
  accessAnItemObject,
  combineObject,
};
