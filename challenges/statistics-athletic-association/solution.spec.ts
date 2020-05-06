import solution = require('./solution');
import {assert} from "chai";

function doTest(strg, expected) {
  assert.equal(solution.G964.stat(strg), expected);
}

describe("statistics-athletic-association", function() {
    it("asserts", function() {
      doTest("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17", 
          "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34");
      doTest("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17", 
        "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34");
      doTest("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41", 
        "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00");
      doTest("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17", 
        "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57");
    });
});
