import { expect } from "chai";
import {
  compareEquality,
  testStrictNotEqual,
  isTeenager,
  isNumeric,
  getLargerNumber,
  isEvenOrOdd,
  caseInSwitch,
} from "../../exercises/02-conditionals/conditionals.js";

describe("exercises/02-conditionals/conditionals.js", () => {
  describe("compareEquality()", () => {
    it("should compare the Equality of both arguments and return equal if both arguments are equal and if both arguments are not equal return not equal", () => {
      expect(compareEquality(5, "5")).equal("Not Equal");
      expect(compareEquality("5", "5")).equal("Equal");
      expect(compareEquality(5, 5)).equal("Equal");
    });
  });

  describe("testStrictNotEqual()", () => {
    it("should use  strict inequality operator and return the correct responses", () => {
      expect(testStrictNotEqual(17, 17)).to.equal("Equal"); // should return "Equal"
      expect(testStrictNotEqual("17", 17)).to.equal("Not Equal"); // should return "Not Equal"
      expect(testStrictNotEqual(12, "bob")).to.equal("Not Equal"); // should return "Not Equal"
      expect(testStrictNotEqual.toString().includes("!==")).equal(true);
    });
  });

  describe("isTeenager", () => {
    it("should return true if the age is between 13 and 19", () => {
      expect(isTeenager(13)).to.equal(true);
      expect(isTeenager(15)).to.equal(true);
      expect(isTeenager(19)).to.equal(true);
    });
    it("should return false if the age is less than 13", () => {
      expect(isTeenager(12)).to.equal(false);
    });
    it("should return false if the age is greater than 19", () => {
      expect(isTeenager(20)).to.equal(false);
    });
    it("should use the logical and (&&) operator", () => {
      expect(isTeenager.toString().includes("&&")).equal(true);
    });
  });

  describe("isNumeric", () => {
    it("should return true if a given argument is a number", () => {
      expect(isNumeric(-4.5)).to.equal(true);
    });
    it("should return true if a given argument is a numeric string", () => {
      expect(isNumeric("-4.5")).to.equal(true);
    });
    it("should return false a string cannot be converted to a number", () => {
      expect(isNumeric("nota#")).to.equal(false);
    });
    it("should use the logical and (||) operator", () => {
      expect(isNumeric.toString().includes("||")).equal(true);
    });
  });

  describe("getLargerNumber()", () => {
    it("should return the largest number by comparing both arguments given to the function", () => {
      expect(getLargerNumber(5, 10)).equal(10);
    });
  });

  // TODO come up with exercises that use  ||

  describe("caseInSwitch()", () => {
    it("should return print out the correct value when given a certain argument", () => {
      expect(caseInSwitch(1)).to.equal("ONE");
      expect(caseInSwitch(5)).to.equal("FIVE");
      expect(caseInSwitch(7)).to.equal("SEVEN");
      expect(caseInSwitch(50)).to.equal("PLEASE TRY AGAIN");
      expect(caseInSwitch(-1)).to.equal("PLEASE TRY AGAIN");
    });
  });
});
