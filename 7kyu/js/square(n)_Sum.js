// Complete the square sum function so that it squares each number passed into it and then sums the results
// together.
// For example, for [1, 2, 2] it should return 9 because 1 sqaured + 2 squared + 2 squared = 9

//MY SOLUTION:
//Solution 1
function squareSum(numbers) {
    let sum = 0
    numbers.forEach(element => {
        sum += element ** 2
    });
    console.log(sum)
}
squareSum([2, 2, 2])

//Solution 2
//arr.forEach(){}
function squareSum2(numbers) {
    let sum = 0
    numbers.map((element) => sum += element ** 2)
    return (sum)
}
squareSum2([2, 2, 2])


//Solution 3
//for(){}
function squareSum3(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += (numbers[i]) ** 2

    }
    console.log(sum)
}
squareSum3([2, 2, 2])