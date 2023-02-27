/**
 * Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
   let arr = []

   if (!input || input.length === 0) {
      return arr
   }

   arr.push(input.reduce((acc, el) => el > 0 ? acc + 1 : acc, 0))
   arr.push(input.reduce((acc, el,) => el <= 0 ? acc + el : acc, 0))

   return arr
}

countPositivesSumNegatives([0, 0])

function countPositivesSumNegatives(input) {
   return input && input.length
      ? [input.filter((el) => el > 0).length,
      input.reduce((acc, el) => el <= 0 ? acc + el : acc, 0)]
      : []
}