/*
Your task is to write function factorial.
 */

function factorial(n){
   if (n === 0) return 1

   return n * factorial(n - 1)
}

console.log(factorial(4))