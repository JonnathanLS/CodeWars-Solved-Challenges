import {number} from "./solution"
import {assert} from "chai"

describe('num-of-people-in-the-bus', () => {
  it('asserts', () => {
    assert.equal(number.reduce([[10,0],[3,5],[5,8]]),5)
    assert.equal(number.reduce([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
    assert.equal(number.loop([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21)
    assert.equal(number.reduce([[0,0]]),0)
  });
});

