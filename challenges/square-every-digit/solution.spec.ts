import solution = require('./solution');
import { assert } from "chai";

describe("square-every-digit", function() {
  it("asserts", function() {
    assert.strictEqual(solution.Kata.squareDigits(9119), 811181);
  });
});