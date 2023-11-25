//INSTRUCTIONS
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, tithat the supplied array will not be empty.

// //SOLUTION
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let ans = Math.min(...args)
        console.log(ans)
    }
}
//use the constructor to create a new object called finder
const finder = new SmallestIntegerFinder();
//call the method findSmallestInt that's built into the constructor
const result = finder.findSmallestInt([34, 15, 88, 2]);
console.log(result);
// It will print 2

