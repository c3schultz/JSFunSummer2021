import { expect } from "chai";

import {
  forEach,
  showFirstAndLast,
} from "../../exercises/10-for-each/for-each.js";

describe("exercises/10-for-each/for-each.js", () => {
  describe("forEach()", () => {
    it("should loop over an array and apply a callback to each item", () => {
      let numbersDoubled = [];
      let suppliedArr = [];
      let arrIndex = [];
      forEach([1, 2, 3], (number, idx, arr) => {
        arrIndex.push(idx);
        numbersDoubled.push(number * 2);
        suppliedArr = arr;
      });
      expect(arrIndex).to.deep.equal([0, 1, 2]);
      expect(suppliedArr).to.deep.equal([1, 2, 3]);
      expect(numbersDoubled).to.deep.equal([2, 4, 6]);
    });
  });

  describe("showFirstAndLast()", () => {
    it("should print only the first and last letter of a string", () => {
      const abbreviatedName = showFirstAndLast([
        "colt",
        "matt",
        "tim",
        "udemy",
      ]);
      expect(abbreviatedName).to.deep.equal(["ct", "mt", "tm", "uy"]);
    });
    it("should use JavaScript's built in .forEach()", () => {
      const funcStr = showFirstAndLast.toString();
      expect(funcStr).to.contain(".forEach");
    });
  });
});
