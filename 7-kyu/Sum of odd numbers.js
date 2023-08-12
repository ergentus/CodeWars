/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
   let firstNum = (n * (n - 1)) + 1
   let sum = 0

   for (let i = 0; i < n; i++) {
      sum += firstNum + (2 * i)
   }

   return sum
}

// n*n*n
console.log(rowSumOddNumbers(3))