const assert = require("chai").assert;
const app = require("../app");

describe("app", function() {
    describe("parseDataToArray", function() {
        it("should return array", function () {
            assert.typeOf(app.parseDataToArray("wordlist.txt"), "array");
        });

    });
});