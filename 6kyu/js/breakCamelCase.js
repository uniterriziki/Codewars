// Complete the solution so that the function will break up camel casing, using a space 
//between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//SOLUTION
function solution(string) {
    let arr = string.split('')
    console.log(arr)
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
        //find the capital letter
        if (arr[i] === arr[i].toUpperCase()) {
            //add a space before it

            arr.splice(i, 0, " ")
            i++;
        }

    }
    console.log(arr.join(''))
}
solution("camelCasing")
solution("doubleCamelCasing")

