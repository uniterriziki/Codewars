// You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
//MY SOLUTION

function getMiddle(s) {
    let num;
    let newArr = []
    //use conditional statement to separate odd and even numbered strings
    if (s.length % 2 == 0) {
        //truncate the number
        num = Math.trunc(s.length / 2)
        //push it into a new array
        newArr.push(s[num - 1], s[num])
        //join the two consecutive letters into a string
        return (newArr.join(''));

    } else {

        num = Math.trunc(s.length / 2)
        return (s[num])
    }
}
getMiddle("test")