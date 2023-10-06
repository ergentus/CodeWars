/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */


function findLongest(array) {
   // return array.reduce((acc, curr) => {
   //    return curr.toString().length >  acc.toString().length ? curr : acc;
   // })
   let num = '0'
   for (let i = 0; i < array.length; i++) {
      let string = array[i].toString()
      if (string.length > num.length) {
         num = string
      }
   }
   return +num
}

console.log(findLongest([500, 190, 1]))