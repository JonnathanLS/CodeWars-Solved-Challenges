import solution = require('./solution');
import {assert} from "chai";

function assertFuzzyEquals(actual, expected){
  var inrange = Math.abs(actual - expected) <= 1e-10;
  assert.equal(inrange, true, `abs({actual} - ${expected}) must be <= 1e-10. Expected was ` + expected.toExponential(10) +", but got " + actual.toExponential(10));
}

describe("Fixed Tests", function() {
  it("Basic tests simpson", function() {
    assertFuzzyEquals(solution.G964.simpson(290), 1.9999999986);
    assertFuzzyEquals(solution.G964.simpson(72), 1.9999996367);
    assertFuzzyEquals(solution.G964.simpson(252), 1.9999999975);
    assertFuzzyEquals(solution.G964.simpson(40), 1.9999961668);
  });
});
