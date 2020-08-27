const fs = require("fs");

module.exports = {
    parseDataToArray: function(filename) {
        let text = fs.readFileSync(filename).toString("utf-8");
        return text.split("\n");
    },

    isAnagram: function(a, b) {
        let firstWord = a.toLowerCase().split("").sort().join("");
        let secondWord = b.toLowerCase().split("").sort().join("");

        return firstWord === secondWord;
    },

    sortAnagramsToArrays: function(arrayOfWords) {
        let listOfAllArraysOfAnagrams = [];

        arrayOfWords.forEach((word) => {
            let listOfAnagrams = [];
            listOfAnagrams.push(word);

            for(let i = 0; i < arrayOfWords.length; i++) {
                if(arrayOfWords[i] === word) {
                    continue;
                }
                if(this.isAnagram(arrayOfWords[i], word)) {
                    listOfAnagrams.push(arrayOfWords[i]);
                }
            }
            listOfAnagrams.sort();
            listOfAllArraysOfAnagrams.push(listOfAnagrams);

        });


        console.log(listOfAllArraysOfAnagrams.filter(( t={}, a=> !(t[a]=a in t) )).length);
        return listOfAllArraysOfAnagrams.filter(( t={}, a=> !(t[a]=a in t) ));
    }
}


