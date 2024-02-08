// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


//SOLUTION
function removeUrlAnchor(url) {
    console.log(url.split('#')[0])
}
// removeUrlAnchor("www.codewars.com#about")
// removeUrlAnchor("www.codewars.com?page=1")

//ALTERNATE SOLUTION
function removeUrlAnchorB(url) {
    let string = ""
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") {
            break;
        }
        string += url[i]
    }
    console.log(string)
}
// removeUrlAnchorB("www.uniterrziki.com#about")
// removeUrlAnchorB("www.uniterrziki.com?page=1")

//FINAL ALTERNATE SOLUTION
const removeUrlAnchor = url => url.replace(/#.+$/, '');



//TRYING TO MAKE MY 1ST IDEA WORK
function removeUrlAnchorC(url) {
    let arr = url.split('')
    // console.log(arr)
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "#") {
            break;
        } else {
            newarr.push(arr[i])
        }
    }
    return (newarr.join(''))
}
removeUrlAnchorC("www.uniterrziki.com#about")
removeUrlAnchorC("www.uniterrziki.com?page=1")





