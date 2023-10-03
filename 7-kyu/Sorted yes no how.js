/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in the ascending order
"yes, descending" - if the numbers in the array are sorted in the descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */

function isSortedAndHow(array) {
   return array.every((e, i) => i === 0 || array[i] >= array[i - 1]) ? 'yes, ascending' :
      array.every((e, i) => i === 0 || array[i] <= array[i - 1]) ? 'yes, descending' : 'no'
}

console.log(isSortedAndHow([1, 2, 3]))

