// Write a function that takes a single non-empty string of only lowercase and uppercase ascii 
//letters (word) as its argument, and returns an ordered list containing the indices of all 
//capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
var capitals = function (word) {
    let caps = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) {
            caps.push(i)
        }
    }
    console.log(caps);
};
capitals("CodEWaRs")













var caps = [];
for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
}