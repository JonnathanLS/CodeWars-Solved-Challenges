import { solution } from './solution';
import { assert } from 'chai';

describe("roman-numerals-decoder", function() {
  it('asserts', () => {
    assert.equal(solution('XXI'), 21);
    assert.equal(solution('I'), 1);
    assert.equal(solution('IV'), 4);
    assert.equal(solution('MMVIII'), 2008);
    assert.equal(solution('MDCLXVI'), 1666);
    assert.equal(solution('MMMDXXXIII'), 3533);
  });
});