import { expect } from "chai";
import {
  addToAnArray,
  accessingAnItem,
  highestNumber,
  isPalindrome,
  combineArray,
  removeDuplicates,
  findAndAbort,
  createArrayOfFunctions,
} from "../../exercises/04-arrays-sets/arrays-sets.js";

describe("exercises/exercises/04-arrays-sets/arrays-sets.js", () => {
  describe("accessingAnItem()", () => {
    it('should return "BMW"', () => {
      const car = accessingAnItem();
      expect(car).to.equal("BMW");
    });
  });

  describe("addToAnArray()", () => {
    it("should return an array with four items", () => {
      const newArr = addToAnArray();
      expect(newArr.length).to.equal(4);
    });
  });

  describe("combineArray()", () => {
    it("should merge two arrays into one", () => {
      const combinedArray = combineArray(["HTML"], ["CSS"]);
      expect(combinedArray).to.deep.equal(["HTML", "CSS"]);
    });
    it("should should two arrays by using the spread operator", () => {
      expect(findAndAbort.toString().includes("...")).to.equal(true);
    });
  });

  describe("createArrayOfFunctions()", () => {
    it("should return an array with two functions", () => {
      const array = createArrayOfFunctions();
      expect(array).to.be.an("array");
      expect(array[0]).to.be.a("function");
      expect(array[1]).to.be.a("function");
    });

    it("the first function should add two arguments", () => {
      const sum = createArrayOfFunctions()[0](10, 10);
      expect(sum).to.equal(20);
    });

    it("the second function should subtract two arguments", () => {
      const difference = createArrayOfFunctions()[1](50, 50);
      expect(difference).to.equal(0);
    });
  });

  describe("highestNumber()", () => {
    it("should return the highest number in the array", () => {
      const number1 = highestNumber([1, 10, 2, 3, 4]);
      expect(number1).to.equal(10);
      const number2 = highestNumber([-1, -5, -4]);
      expect(number2).to.equal(-1);
    });
  });

  describe("findAndAbort()", () => {
    it("should return the object with a given id", () => {
      const people = [
        {
          id: 10,
          firstName: "John",
          lastName: "Smith",
        },
        {
          id: 20,
          firstName: "Cookie",
          lastName: "Monster",
        },
        {
          id: 30,
          firstName: "Jane",
          lastName: "Doe",
        },
        {
          id: 40,
          firstName: "Tom",
          lastName: "Hardy",
        },
      ];

      expect(findAndAbort(people, 20)).to.deep.equal({
        id: 20,
        firstName: "Cookie",
        lastName: "Monster",
      });
    });

    it("should use break to break out of a loop", () => {
      expect(findAndAbort.toString().includes("break")).to.equal(true);
    });
  });

  describe("isPalindrome()", () => {
    it("should return true if a word is a palindrome", () => {
      const result = isPalindrome("eye");
      expect(result).to.be.equal(true);
    });
    it("should return false if a word is not a palindrome", () => {
      const result = isPalindrome("not a palindrome");
      expect(result).to.be.equal(false);
    });
    it("should use split", () => {
      expect(isPalindrome.toString().includes("split")).to.equal(true);
    });
  });

  describe("removeDuplicates()", () => {
    it("should remove all duplicate values", () => {
      const unique = removeDuplicates([
        2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5,
      ]);
      expect(unique).to.deep.equal([2, 3, 4, 5, 6, 7, 32]);
    });
  });
});
