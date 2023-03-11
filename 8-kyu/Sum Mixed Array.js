/**
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

function sumMix(x) {
   return x.reduce((a, e) => Number(e) + a, 0)
}

/**
 * function sumMix(x){
  return x.map(Number).reduce((a, e) => e + a)
}
 */