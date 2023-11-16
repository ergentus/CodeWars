/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
 */

function partsSums(ls) {
   ls.unshift(0)
   let sum = ls.reduce((e, a) => e + a, 0)

   return ls.map(e => sum -= e)
}

console.log(partsSums([0, 1, 3, 6, 10]))