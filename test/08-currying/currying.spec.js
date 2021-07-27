import { expect } from "chai";

import { multiplier } from "../../exercises/08-currying/currying.js";

describe("exercises/08-currying-and-callbacks/currying-and-callbacks.js", () => {
  describe("multiplier", () => {
    it("should multiply at once if passed two numbers as arguments", () => {
      const result = multiplier(3, 4);
      expect(result).be.equal(12);
    });
    it("should return a function if only passed once argument", () => {
      const result = multiplier(3);
      expect(result).to.be.a("function");
    });
    it("should multiply the two numbers if passed in a parameters in a separate set of parentheses (e.g. multiplier(3)(4))", () => {
      const result = multiplier(3)(4);
      expect(result).be.equal(12);
    });
  });
});
