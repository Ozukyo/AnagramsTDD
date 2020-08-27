const assert = require("chai").assert;
const app = require("../app");

describe("app", function() {
    describe("parseDataToArray", function() {
        it("should return array", function () {
            let result = app.parseDataToArray("wordlist.txt");
            assert.typeOf(result, "array");
        });

    });

    describe("isAnagram", function() {
        let array = app.parseDataToArray("wordlist.txt");

        it("should return false", function () {
            let result = app.isAnagram(array[10], array[13]);
            assert.isFalse(result, "false");
        });

        it("should return true", function () {
            let result = app.isAnagram(array[207804], array[140451]);
            assert.isTrue(result, "true");
        })
    })
});