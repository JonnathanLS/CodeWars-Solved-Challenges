import { countSheeps } from './solution';
import { expect } from "chai";

var array = [true,  true,  true,  false,
              true,  null,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  undefined,  true ,
              false, false, true,  true ];            
  
describe('counting-sheeps', function() {
  it("asserts", () => {
   const result1 = countSheeps(array); 
   expect(result1).to.equal(15, "There are 15 sheeps in total, not " + result1);
  });
});