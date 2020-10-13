// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildChar(str){

    // takes only A-Z, lowercases, splits to array, sorts array, and rejoins array to string
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

}

function anagrams(stringA, stringB) {

    var return_charA = buildChar(stringA);
    var return_charB = buildChar(stringB);

    if( return_charA !== return_charB || return_charA.legnth == 0 || return_charB.legnth == 0){
        return false;
    }

    return true; 
}


module.exports = anagrams;
