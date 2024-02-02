// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//SOLUTION
function getCount(str) {
    let count = 0
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
            count += 1
        }
    }
    return count
}
getCount("hey, how are you?")

//ALTERNATIVE SOLUTION
function getCount(str) {
    let count = 0
    let arr = str.split('')
    arr.forEach(element => {
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count += 1
        }
    });

    return count
}
getCount("hey, how are you?")
