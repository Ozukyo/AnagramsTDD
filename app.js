const fs = require("fs");

module.exports = {
    parseDataToArray: function(filename) {
        let text = fs.readFileSync(filename).toString("utf-8");
        return text.split("\n");
    }
}

