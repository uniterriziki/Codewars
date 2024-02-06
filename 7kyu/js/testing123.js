//INSTRUCTIONS
// Your team is writing a fancy new text editor and you've been tasked with implementing the 
//line numbering.
// Write a function which takes a list of strings and returns
// each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. 
//Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


//SOLUTION1

var number = function (arr) {
    let newArr = []
    arr.forEach((element, index) => {
        let numberL = index + 1
        element = `${numberL}: ${element}`
        newArr.push(element)
    });
    console.log(newArr)
}
number(['a', 'b', 'c'])


////SOLUTION2
var number2 = function (array) {
    const array2 = array.map((ele, ind) => `${ind + 1}: ${ele} `)
    console.log(array2)
}
number2(["a", "b", "c"])



