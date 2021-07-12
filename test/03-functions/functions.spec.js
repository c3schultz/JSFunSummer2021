import { expect } from "chai";
import functions from "../../exercises/03-functions/functions.js";
const {
  printGreeting,
  timesFive,
  lowerCaseName,
  isEvenOrOdd,
  countNumberOfDigits,
} = functions;

describe("exercises/03-functions/functions.js", () => {
  describe("printGreeting()", () => {
    it('should return "Hello ______!"', () => {
      expect(printGreeting("Tim")).to.equal("Hello Tim!");
    });
    it("should use arrow syntax", () => {
      expect(printGreeting.toString().includes("=>")).equal(true);
    });
  });
  describe("timesFive()", () => {
    it("should multiply a number by 5", () => {
      expect(timesFive(5)).to.equal(25);
      expect(timesFive(10)).to.equal(50);
      expect(timesFive(2)).to.equal(10);
    });
    it("should use arrow syntax", () => {
      expect(timesFive.toString().includes("=>")).equal(true);
    });
  });
  describe("lowerCaseName()", () => {
    it("should lower case a string", () => {
      expect(lowerCaseName("HELLO WORLD")).to.equal("hello world");
    });
    it("should not throw an error is given a value that is not a string. (NOTE that this test will pass if you have not solved this problem yet.)", () => {
      const goodFn = () => lowerCaseName(null);
      expect(goodFn).to.not.throw();
      expect(lowerCaseName()).to.not.be.ok;
      expect(lowerCaseName(null)).to.not.be.ok;
    });
    it("should use arrow syntax", () => {
      expect(lowerCaseName.toString().includes("=>")).equal(true);
    });
  });
  describe("isEvenOrOdd()", () => {
    it('should return "even" if a number is even', () => {
      expect(isEvenOrOdd(100)).to.equal("even");
    });
    it('should return "odd" if a number is odd.', () => {
      expect(isEvenOrOdd(7)).to.equal("odd");
    });
    it("should use arrow syntax", () => {
      expect(isEvenOrOdd.toString().includes("=>")).equal(true);
    });
  });
  describe("countNumberOfDigits()", () => {
    it("should count the number of digits", () => {
      expect(countNumberOfDigits(5000)).to.equal(4);
    });
    it("should use arrow syntax", () => {
      expect(countNumberOfDigits.toString().includes("=>")).equal(true);
    });
  });
});
