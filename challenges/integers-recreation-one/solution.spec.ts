import { assert } from "chai";
  
import solution = require('./solution');

function testing(m: number, n: number, expected: number[][]): void {
  assert.deepEqual(solution.G964.listSquared(m, n), expected);
}
function randomTesting(){
  return 1;
}
describe("integers-recreation-one", function() {
  it("asserts", function() {
    // testing(1, 30000, [[1, 1], [42, 2500], [246, 84100], [287, 84100]]);
    testing(42, 300, [[42, 2500], [246, 84100], [287, 84100]]);
    testing(200, 500, [[246, 84100], [287, 84100]]);
    testing(728,728,[[728,722500]]); 
    testing(1,1,[[1,1]]);  
    testing(300, 600, []);
  });
});