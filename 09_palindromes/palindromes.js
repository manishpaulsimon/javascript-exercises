const palindromes = (word) => {
    let reverseString = '';
    let array = [];
    //Clean up the String first
    let cleanWord = word.split('').filter(char => 
        char !== '!' && char !== ',' && char !== ' ' && char !== '.')
        .join('').toLowerCase();

    // Get length of Cleaned Word    
    let stringLength = cleanWord.length;

    // running through the cleanedword length and reversing the string
    for (let i=0; i < stringLength; i++) {
            // add last character to empty array
            array.push(cleanWord[stringLength-1-i]);
    }
    // convert array to string
    reverseString = array.join('');

    // Get a clean version of the user's word
  
    if (cleanWord == reverseString) {
        return true;
    }
    else {
        return false;
    }
}

let String1 = palindromes('racecar');
let String2 = palindromes('racecar!');
let String3 = palindromes('A car, a man, a maraca.');


// Do not edit below this line
module.exports = palindromes;
