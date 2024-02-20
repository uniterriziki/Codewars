// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//SOLUTION
// function solution(str, ending) {
//     let numOfChar = ending.length
//     //console.log(numOfChar)
//     let arr = [];
//     for (let i = str.length - 1; i >= numOfChar - 1; i--) {
//         arr.unshift(str[i])
//     }
//     //console.log(arr)
//     if (arr.join('') === ending) {
//         return true
//     } else {
//         return false

//     }
// }
function solution(str, ending) {
    if (ending.length > str.length) {
        console.log(false)
    }
    let ministring = str.substring(str.length - ending.length)
    if (ministring == ending) {
        console.log(true)
    } else {
        console.log(false)
    }
}
solution('abc', 'bc')
solution('abc', 'd')
solution('sumo', 'omo')
solution('samurai', 'ai')

