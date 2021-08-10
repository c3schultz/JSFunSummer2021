import { expect } from "chai";
import {
  filter,
  deleteUser,
  find,
  findUser,
  addItems,
  flattenArray,
  generateTally,
  arrayToObject,
} from "../../bonus/high-order-functions/high-order-functions.js";

describe("Filter", () => {
  describe("filter()", () => {
    it("should remove values that meet a given condition", () => {
      let idx = 0;
      const originalArray = [4, 18, 50, 33];
      const notDivisibleByTen = filter(
        originalArray,
        (number, index, array) => {
          expect(index).to.equal(idx);
          expect(array).to.deep.equal(originalArray);
          idx += 1;
          return number % 10 !== 0;
        }
      );
      expect(notDivisibleByTen).to.equalTo([4, 18, 33]);
    });
  });

  describe("deleteUser()", () => {
    it("should remove the user object with the matching id", () => {
      const users = [
        {
          id: 1024,
          username: "smile134",
          email: "smile134@example.com",
        },
        {
          id: 1025,
          username: "newyorkfarmer",
          email: "johndoe@example.com",
        },
        {
          id: 1026,
          username: "redsocksfan#1",
          email: "massusa@example.com",
        },
      ];
      const user = deleteUser(users, 1025);
      expect(user).to.deep.equal([
        {
          id: 1024,
          username: "smile134",
          email: "smile134@example.com",
        },
        {
          id: 1026,
          username: "redsocksfan#1",
          email: "massusa@example.com",
        },
      ]);
    });
    it("should use JavaScript's built in .filter()", () => {
      const funcStr = deleteUser.toString();
      expect(funcStr).to.contain(".filter");
    });
  });
});

describe("Find", () => {
  describe("find()", () => {
    it("should search more and return the first single matching value", () => {
      let idx = 0;
      const originalArray = [4, 18, 50, 33];
      const divisibleByTen = find(originalArray, (number, index, array) => {
        expect(index).to.equal(idx);
        expect(array).to.be.equalTo(originalArray);
        idx += 1;
        return number % 10 === 0;
      });
      expect(divisibleByTen).to.equal(50);
    });
  });

  describe("findUser()", () => {
    it("should return the user object with the matching id", () => {
      const users = [
        {
          id: 1024,
          username: "smile134",
          email: "smile134@example.com",
        },
        {
          id: 1025,
          username: "newyorkfarmer",
          email: "johndoe@example.com",
        },
        {
          id: 1026,
          username: "redsocksfan#1",
          email: "massusa@example.com",
        },
      ];
      const user = findUser(users, 1025);
      expect(user).to.deep.equal({
        id: 1025,
        username: "newyorkfarmer",
        email: "johndoe@example.com",
      });
    });
    it("should use JavaScript's built in .find()", () => {
      const funcStr = findUser.toString();
      expect(funcStr).to.contain(".find");
    });
  });
});

describe("Reduce", () => {
  describe("addItems()", () => {
    it("should add up all the numbers and return the total", () => {
      const total = addItems([1, 2, 3]);
      const negativeTotal = addItems([-10, 5, 5]);
      expect(total).to.equal(6);
      expect(negativeTotal).to.equal(0);
    });
    it("should use JavaScript's built in .reduce()", () => {
      const funcStr = addItems.toString();
      expect(funcStr).to.contain(".reduce");
    });
  });
  describe("flattenArray()", () => {
    it("should return a flattened array (an array that is not multidimensional)", () => {
      const flat = flattenArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(flat).to.be.equalTo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("should use JavaScript's built in .reduce()", () => {
      const funcStr = flattenArray.toString();
      expect(funcStr).to.contain(".reduce");
    });
  });
  describe("generateTally()", () => {
    it("should return an object that contains a tally of how many times an item occurs in an array", () => {
      const tally = generateTally([
        "es6",
        "es6",
        "es6",
        "es5",
        "react",
        "angular",
        "vue",
      ]);
      expect(tally).to.deep.equal({
        es6: 3,
        es5: 1,
        react: 1,
        angular: 1,
        vue: 1,
      });
    });
    it("should use JavaScript's built in .reduce()", () => {
      const funcStr = generateTally.toString();
      expect(funcStr).to.contain(".reduce");
    });
  });
  describe("arrayToObject()", () => {
    it("should transform an array of objects to an object where each key is the id and the value is the original object", () => {
      const peopleArray = [
        { id: 123, name: "dave", age: 23 },
        { id: 456, name: "chris", age: 23 },
        { id: 789, name: "bob", age: 23 },
        { id: 101, name: "tom", age: 23 },
        { id: 102, name: "tim", age: 23 },
      ];
      const peopleObject = {
        123: { id: 123, name: "dave", age: 23 },
        456: { id: 456, name: "chris", age: 23 },
        789: { id: 789, name: "bob", age: 23 },
        101: { id: 101, name: "tom", age: 23 },
        102: { id: 102, name: "tim", age: 23 },
      };
      const arrOfObj = arrayToObject(peopleArray);
      expect(arrOfObj).to.deep.equal(peopleObject);
    });
    it("should use JavaScript's built in .reduce()", () => {
      const funcStr = arrayToObject.toString();
      expect(funcStr).to.contain(".reduce");
    });
  });
});
