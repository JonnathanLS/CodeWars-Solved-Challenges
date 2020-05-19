import { G964 } from "./solution";
import { assert } from "chai";

function doTest(n: number, p: number, expected: number) {
    assert.equal(G964.digPow(n, p), expected);
}

describe("playing-with-digits", function() {
    it("asserts", function() {
      doTest(89, 1, 1);
      doTest(92, 1, -1);
      doTest(114, 3, 9);
      doTest(695, 2, 2);
      doTest(46288, 3, 51);
    });
});