import { assert } from "chai";
  
import { tribonacci } from './solution'

const assertFn = (sig: [number, number, number], n: number, exp: number[]) => 
  it(`assert([${sig[0]}, ${sig[1]}, ${sig[2]}], ${n})`, () => 
    assert.deepStrictEqual(tribonacci.recursive(sig, n), exp));
describe("tribonacci-sequence", () => {
  assertFn([1, 1, 1], 1, [1]);
  assertFn([0, 0, 0], 10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assertFn([1, 0, 0], 10, [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  assertFn([0, 0, 1], 10, [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  assertFn([0, 1, 1], 10, [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  assertFn([1, 1, 1], 10, [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  assertFn([3, 2, 1], 10, [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  assertFn([1, 2, 3], 10, [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  assertFn([300, 200, 100], 0, []);
  assertFn([300, 200, 100], 2, [300,200]);
  assertFn([0.5, 0.5, 0.5], 5, [0.5, 0.5, 0.5, 1.5, 2.5]);
});