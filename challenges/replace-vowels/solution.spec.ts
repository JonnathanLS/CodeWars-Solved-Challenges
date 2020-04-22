import { assert } from "chai";
  
import solution = require('./solution');

describe("replace-vowels", function() {
  it("asserts", function() {
    assert.equal(solution.replaceVogals('a'), '?');
    assert.equal(solution.replaceVogals('ab'), '?b');
    assert.equal(solution.replaceVogals('kleber da silva'), 'kl?b?r d? s?lv?', "Deve considderar espaços");
    assert.equal(solution.replaceVogals('Ana Maria'), '?n? M?r??', "Deve considerar letras maísculas");
  });
});