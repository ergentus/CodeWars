/**
 * Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

/*function digitize(n) {

   let arr =[]
   n = String(n)

   for (let i = n.length-1; i >= 0; i--) {
      arr.push(Number(n[i])) 
   }

   return arr
}
*/

function digitize(n) {
   return String(n).split('').reverse().map(Number)
}

digitize(35231)