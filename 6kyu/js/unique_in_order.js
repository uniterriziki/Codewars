// Implement the function unique_in_order which takes as argument a 
//sequence and returns a list of items without any elements with the same 
//value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//SOLUTION
var uniqueInOrder = function (iterable) {
    //create a new arr
    let arr = [];
    //loop through original array
    for (let i = 0; i < iterable.length; i++) {
        //check if element is equal to last elment in new arrray
        if (iterable[i] !== arr[arr.length - 1]) {
            arr.push(iterable[i])
        }
    }
    return arr
}
uniqueInOrder([1, 2, 2, 3, 3])







// var uniqueInOrder = function (iterable) {
//     let arr = []
//     for (let i = 0; i < iterable.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (iterable[i] !== arr[j]) {
//                 arr.push(iterable[i])
//             }
//         }

//     }
//     console.log(arr)
//     //your code here - remember iterable can be a string or an array
// }
// uniqueInOrder([1, 2, 2, 3, 3])

//   function array_diff(a, b) {
//     //     return a.filter(e => !b.includes(e));
//     //   }