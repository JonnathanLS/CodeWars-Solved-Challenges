import { assert } from "chai";

import { duplicateCount } from "./solution";

describe("counting-duplicates", function() {
  it("asserts", function() {
    assert.equal(duplicateCount(""), 0, 'deve considerar string vazia');
    assert.equal(duplicateCount("assert2"), 1, 'deve considerar números');
    assert.equal(duplicateCount("Amellia"), 2,"deve considerar maiúsculas");
    assert.equal(duplicateCount("Indivisibilities"), 2, "caracteres podem não estar adjacentes")
    assert.equal(duplicateCount("abc 123 xyz"), 1, "deve considerar espaço")
  });
});