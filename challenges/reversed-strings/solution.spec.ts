import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

describe("reversed-strings", function(){
  it("asserts", function() {
    assert.equal(solution.solution('world'), 'dlrow');
    assert.equal(solution.solution('hello'), 'olleh');
    assert.equal(solution.solution(''), '');
    assert.equal(solution.solution('h'), 'h');
  });
});