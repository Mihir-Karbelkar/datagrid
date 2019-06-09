const mocha = require("mocha");
const chai = require("chai");
const solution = require("../Solution");
const expect = chai.expect;
//Test Solution.answer
correctData = [[1, 3, 1, 5], [2, 3, 5, 3], [3, 4, 15, 4]];
describe("Recursive Solution Test", () => {
  it("Checks for values that produce true ", () => {
    correctData.forEach(element => {
      expect(solution(element[0], element[1], element[2], element[3])).to.equal(
        true
      );
    });
  });
});
