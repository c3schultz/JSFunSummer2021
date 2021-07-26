import { expect } from "chai";

import {
  greeter,
  calculator,
  guessingGame,
} from "../../exercises/07-closures/closures.js";

describe("exercises/07-closures/closures.js", () => {
  describe("greeter()", () => {
    it('should return an object with the method "hello"', () => {
      const say = greeter();
      expect(say).to.be.a("object");
      expect(say).to.include.keys("hello");
      expect(say.hello).to.be.a("function");
    });
    it('"hello" should greet a person when called on with e.g. "Hello _____!', () => {
      const say = greeter();
      const greeting = say.hello("Twinkle Toes");
      expect(greeting).to.equal("Hello Twinkle Toes!");
    });
  });

  describe("calculator()", () => {
    it("should return an object with two functions", () => {
      const calcObj = calculator();
      expect(calcObj).to.be.an("object");

      const methods = Object.values(calcObj);
      expect(methods).to.have.lengthOf(2);

      expect(methods[0]).to.be.a("function");
      expect(methods[1]).to.be.a("function");
    });
    it('the second method ("getter") should return the value of sum. ("sum" needs to be "falsy" at first for this to pass).', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const sum = methods[1]();
      expect(sum).to.not.be.ok;
    });
    it('the first method ("setter") should set the value of sum', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const [add, get] = methods;

      add(5);
      const sum1 = get();
      expect(sum1).to.equal(5);

      add(13);
      const sum2 = get();
      expect(sum2).to.equal(18);

      add(0);
      const sum3 = get();
      expect(sum3).to.equal(18);

      add(-20);
      const sum4 = get();
      expect(sum4).to.equal(-2);
    });
  });

  describe("guessingGame()", () => {
    it("should return a function", () => {
      const round = guessingGame(3);
      expect(round).to.be.a("function");
    });
    it('should return "You\'re too low!" if your guess is too low', () => {
      const round = guessingGame(5);
      const feedback = round(-Infinity);
      expect(feedback).to.equal("You're too low!");
    });
    it('should return "You\'re too high!" if your guess is too high', () => {
      const round = guessingGame(5);
      const feedback = round(Infinity);
      expect(feedback).to.equal("You're too high!");
    });
    it(
      'should return "You got it!" if your guess is the same as the random number. (Skipping because we cannot test this).'
    );
    it('should return "No more guesses the answer was x", where x is the answer, if you guess more than what is allowed', () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      expect(feedback).to.include("No more guesses. The answer was ");
    });
    it("should have an answer that is an integer", () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      const isFloat = feedback.match(/\d(?=\.\d)/);
      expect(isFloat).to.be.null;
    });
  });
});
