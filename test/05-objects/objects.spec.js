import { expect } from "chai";
import {
  createDogObject,
  createGraduateObject,
  updateStudentObject,
  returnObjectValues,
  accessAnItemObject,
  combineObject,
} from "../../exercises/05-objects/objects.js";

describe("exercises/exercises/05-objects/object.js", () => {
  describe("createDogObject()", () => {
    it('should return an object with the properties "name", "legs", "tails", "owners"', () => {
      const dog = createDogObject();
      expect(dog).to.be.an("object");
      expect(dog).to.have.all.keys("name", "legs", "tails", "owners");
    });
    it('the "owners" property should be an array', () => {
      const dog = createDogObject();
      expect(dog.owners).to.be.an("array");
    });
  });

  describe("createGraduateObject()", () => {
    it("should return an object that represents a graduate", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(graduateObject).to.deep.equal({
        name: "Eddie Willard",
        graduationYear: 2020,
        skills: ["JavaScript", "React", "CSS"],
        links: {
          github: "https://github.com/example/profile",
          linkedIn: "https://linkedin.com/profile",
        },
      });
    });
  });

  describe("accessAnItemObject()", () => {
    it("should return ballcap", () => {
      const item = accessAnItemObject();
      expect(item).to.equal("ballcap");
    });
  });

  describe("updateStudentObject()", () => {
    it("should complete the student object with a first name, last name, and an array of three skills", () => {
      const student = updateStudentObject();
      expect(student.firstName).to.be.a("string").to.be.ok;
      expect(student.lastName).to.be.a("string").to.be.ok;
      expect(student.skills.length).to.equal(3);
    });
  });

  describe("returnObjectValues()", () => {
    it("should return all the values in an object", () => {
      const objectValues = returnObjectValues();
      expect(objectValues).to.deep.equal([1, 4, "Stacy", "Rocket"]);
    });
  });

  describe("combineObject()", () => {
    it("should combine two objects and return a single object", () => {
      const obj1 = {
        firstName: "Clark",
      };
      const obj2 = {
        lastName: "Kent",
      };
      const combinedObj = combineObject(obj1, obj2);
      expect(combinedObj).to.deep.equal({
        firstName: "Clark",
        lastName: "Kent",
      });
    });
  });
});
