import {summation} from "./solution";
import {assert} from "chai";

describe('grasshopper-summation', () => {
  it('asserts', () => {
    assert.equal(summation(0), 0)
    assert.equal(summation(1), 1)
    assert.equal(summation(8), 36)
  })
})