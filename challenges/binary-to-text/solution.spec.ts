import { assert } from "chai";
  
import { binaryToString } from './solution'

describe("binary-to-text", function() {
  it("asserts", () => {
    assert.equal(binaryToString(''), '');
    //Test apha chars
    assert.equal(binaryToString('01100001'), 'a')
    assert.equal(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')
    //Test numeric
    assert.equal(binaryToString('00110001001100000011000100110001'), '1011')
    //Test special chars
    assert.equal(binaryToString('001111000011101000101001'), '<:)');
  });
});