const fs = require("fs");

module.exports = {
    parseDataToArray: function(filename) {
        let text = fs.readFileSync(filename).toString("utf-8");
        return text.split("\n");
    },

    isAnagram: function(a, b) {
        let firstWord = a.toLowerCase().split("").sort().join("");
        let secondWord = b.toLowerCase().split("").sort().join("");
        console.log(a, b);

        return firstWord === secondWord;
    }
}

