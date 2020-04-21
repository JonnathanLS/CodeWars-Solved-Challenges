import { assert } from "chai";
  
import solution = require('./solution');

describe("equalize-the-array", function() {
  it("asserts", function() {
    assert.deepEqual(solution.equalize([20,30,35,10]),(["+0","+10","+15","-10"]));
    assert.deepEqual(solution.equalize([]),([]));
    assert.deepEqual(solution.equalize([10,12,24,50,0,15,20]),(["+0","+2","+14","+40","-10","+5","+10"]));
  });
});