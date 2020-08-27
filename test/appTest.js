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
        });
    });

    describe("sortAnagramToArrays", function() {
        let array = app.parseDataToArray("test.txt");
        let resultArr = app.sortAnagramsToArrays(array);

        it("should return array", function() {
            assert.typeOf(resultArr, "array");
        });

        it("should not be empty", function() {
            assert.isNotEmpty(resultArr, "not empty");
        });

        it("should have 36 elements", function() {
            let resultLength = resultArr.length;
            assert.equal(resultLength, 36);
        });

        it("should second inner array have 4 elements", function() {
            let resultLength = resultArr[1].length;
            assert.equal(resultLength, 4);
        });

        it("should have less than 50 elements", function() {
            let resultLength = resultArr.length;
            assert.isBelow(resultLength, 50);
        });
    });


});