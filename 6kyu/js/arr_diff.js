// Your goal in this kata is to implement a difference function, which subtracts one list 
//from another and returns the result.
// It should remove all values from list a, which are present in list b keeping
// their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//MY FIRST 6KYU CHALLENGE

//SOLUTION
function arrayDiff(a, b) {
    let finalArr = []
    // let ans = false => brings this eraa was [1,2], b was [1]: expected [] to deeply equal [ 2 ] =>wekaing it outside the loop
    for (let i = 0; i < a.length; i++) {
        let ans = false  //THERE IS A DIFFERENCE
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                ans = true;
                break;
            }

        }
        if (!ans) {
            finalArr.push(a[i])
        }
    }
    // 
    return finalArr
}
arrayDiff([1, 2], [1])
arrayDiff([1, 2, 2, 2, 3], [2])
arrayDiff([1, 2, 2], [])
