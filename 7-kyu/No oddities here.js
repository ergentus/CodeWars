/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
 */

function noOdds(values) {
   return values.filter((e) => e % 2 === 0)
}

console.log(noOdds([62,-192,-117,5,-109,-148,-19,-111,72,59,-193,67,-40,88,130,83,-52,-80,-61,-109,-67,48,123,187]))