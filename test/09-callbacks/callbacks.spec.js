import { expect } from "chai";
const sinon = "sinon";

import * as functions from "../../exercises/09-callbacks/callbacks.js";
const { calculate, printer, printNames, findFirst } = functions;

describe("exercises/09-callbacks/09-callbacks.js", () => {
  describe("calculate()", () => {
    it("should use the callback", () => {
      const funcStr = calculate.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should return the result of a callback invoked on two numbers", () => {
      const multiply = (a, b) => {
        return a * b;
      };
      const result = calculate(5, 10, multiply);
      expect(result).to.equal(50);
    });
  });
  describe("printNames()", () => {
    it("should call on a callback for each item in an array", () => {
      const callback = sinon.spy();
      printNames(["test", "test1", "test3"], callback);
      expect(callback.calledThrice).to.equal(true);
    });
    it('should `console.log` a name when the callback is the "printer" function', () => {
      expect(printer).to.be.a("function");
      expect(printer.toString()).to.include("console.log");
      printNames(["Jamal", "Matina"], printer);
    });
  });
  describe("findFirst()", () => {
    it("should use the callback", () => {
      const funcStr = findFirst.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should find the first number in an array that, when passed as an argument into a callback, returns true", () => {
      const isNumberDivisibleByThree = (num) => {
        if (num % 3 === 0) return true;
        else return false;
      };
      const result = findFirst([1, 3, 7, 8, 20], isNumberDivisibleByThree);
      expect(result).to.equal(3);
    });
  });
});
