/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
   const odd = array.filter((e) => e % 2).sort((a,b) => b - a)
   return array.map(e => e % 2 ? odd.pop() : e)
}

console.log(sortArray([ -19, -43, 32, 36, 5, 33, -40, 39, 41, -45, 12, 47, 14, -10, 49, 6, 2, -25, -27]))