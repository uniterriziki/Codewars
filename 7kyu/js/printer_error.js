// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to
// use colors which, 
//for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" 
//control string 
//would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time 
//color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
//e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the 
//printer as a string representing a rational whose numerator is the number of errors and the denominator 
//the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

//MY SOLUTION
function printerError(s) {
    let arr = s.split('')
    let count = 0;
    let ans;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'n' || arr[i] == 'o' || arr[i] == 'p' || arr[i] == 'q' || arr[i] == 'r' || arr[i] == 's' || arr[i] == 't' || arr[i] == 'u' || arr[i] == 'v' || arr[i] == 'w' || arr[i] == 'x' || arr[i] == 'y' || arr[i] == 'z') {
            count += 1
        }
    }
    ans = (`${count}/${s.length}`)
    return ans
}
printerError("aaaxbbbbyyhwawiwjjjwwm")


//ALTERNATIVE SOLUTION
function printerError(s) {
    let arr = s.split('')
    let count = 0;
    let ans;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > "m") {
            count += 1
        }
    }
    ans = (`${count}/${s.length}`)
    return ans
}
printerError("aaaxbbbbyyhwawiwjjjwwm")