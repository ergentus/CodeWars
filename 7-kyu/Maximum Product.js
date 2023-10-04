/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
 */

function adjacentElementsProduct(array) {
   const result = array.map((e, i) => e * array[i + 1]).slice(0, -1)
   return Math.max(...result)
}

console.log(adjacentElementsProduct([-9, 35, -10, 3, -24, 1, -48]))