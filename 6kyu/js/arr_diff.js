// Your goal in this kata is to implement a difference function, which subtracts one list 
//from another and returns the result.
// It should remove all values from list a, which are present in list b keeping
// their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//MY FIRST 6KYU CHALLENGE
function arrayDiff(a, b){
    //declaring array for non-duplicated numbers
    let arr = []
    //loop through the first list
    for(let i =0;i<a.length;i++){
        // console.log(a[i])
        //loop through the second list
        for(let j=0;j<b.length;j++){
            // console.log(b[j])
            //compare both numbers. if unequal, add the number from array a to the arr declared earlier
        if(a[i] !== b[j]){
            arr.push(a[i])
            // break;
        }    }
    
    }
    console.log(arr)
}
arrayDiff([1, 2], [1])
arrayDiff([1, 2, 2, 2, 3], [2])
arrayDiff([1, 2, 2], [])













//SOLUTION
// function arrayDiff(a, b) {
//     let finalArr = []
//     // let ans = false => brings this error a was [1,2], b was [1]: expected [] to deeply equal [ 2 ] =>wekaing it outside the loop
//     for (let i = 0; i < a.length; i++) {
//         let ans = false  //THERE IS A DIFFERENCE
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 ans = true;
//                 break;
//             }

//         }
//         if (!ans) {
//             finalArr.push(a[i])
//         }
//     }
//     // 
//     return finalArr
// }
// arrayDiff([1, 2], [1])
// arrayDiff([1, 2, 2, 2, 3], [2])
// arrayDiff([1, 2, 2], [])


// // OTHER SOLUTIONS
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }

//   function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
//   }

//   function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
//   }
//   function array_diff(a, b) {

//     var arr = new Array();
    
//     for(var i = 0;i<a.length;i++){
//         if(b.indexOf(a[i])<0){
//             arr.push(a[i]);
//         }
//     }
  
//     return arr;
// }