// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.
console.log("Hello World")
function switchItUp(number) {
    switch (number) {
        case 0:
            return ("zero")
            break;
        case 1:
            return ("one")
            break;
        case 2:
            return ("two")
            break;
        case 3:
            return ("three")
            break;
        case 4:
            return ("four")
            break;
        case 5:
            return ("five")
            break;
        case 6:
            return ("six")
            break;
        case 7:
            return ("seven")
            break;
        case 8:
            return ("eight")
            break;
        case 9:
            return ("nine")
            break;
        default: console.log("oopsie")
    }
}
switchItUp(7)
switchItUp(8)
switchItUp(9)