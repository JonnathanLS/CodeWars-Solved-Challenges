import solution = require('./solution');
import {assert} from "chai";

describe("sum-of-digits-digital-roots", function(){
  it('asserts', () => {
    assert.equal(solution.digitalRoot(6), 6);
    assert.equal(solution.digitalRoot(16), 7);
    assert.equal(solution.digitalRoot(456), 6);
  });
});