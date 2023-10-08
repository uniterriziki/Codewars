// Complete the function that accepts a string parameter, and reverses 
//each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//MY SOLUTION
function reverseWords(str) {
    // Go for it
    let words = str.split(' ')
    let reverseWords = []
    let finalString;
    for (const word of words) {
        let reverseWord = '';
        for (let i = (word.length - 1); i >= 0; i--) {
            reverseWord += word[i];
        }
        reverseWords.push(reverseWord)
        console.log(reverseWords)
    }
    finalString = reverseWords.join(' ')
    return finalString
}
reverseWords("what's going on?")

