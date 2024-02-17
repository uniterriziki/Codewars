// Complete the function so that it finds the average of the three scores passed to it and returns the letter 
//value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative 
//values or values greater than 100.


//SOLUTION
function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    console.log(score)
    if (score >= 90) {
        return ('A')
    } else if (score >= 80) {
        return ('B')
    } else if (score >= 70) {
        return ('C')
    } else if (score >= 60) {
        return ('D')
    } else if (score < 60) {
        return ('F')
    } else {
        return ('error')
    }
}
getGrade(95, 90, 93)
getGrade(65, 74, 79)