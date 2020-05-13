import {summation} from "./solution";
import {assert} from "chai";

describe('grasshopper-summation', () => {
  it('asserts', () => {
    assert.equal(summation.unusual(0), 0)
    assert.equal(summation.recursive(4), 10)
    assert.equal(summation.iterative(8), 36)
  })
})