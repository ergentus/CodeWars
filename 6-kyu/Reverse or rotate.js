/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
 */

function revrot(str, sz) {
   if (sz <= 0 || !str || sz > str.length) return ''
   const arr = []

   for (let i = 0; i < str.length / sz; i++) {
      arr.push(str.slice(i * sz, (i + 1) * sz))
   }

   if (arr[arr.length - 1].length !== sz) {
      arr.pop()
   }

   const condition = arr.map(e => e.split('').reduce((a, e) => a + Math.pow(+e, 3), 0) % 2 === 0)

   return arr.map( (e, i) => condition[i] ? e.split('').reverse().join('') : e.slice(1) +e[0]).join('')

}

console.log(revrot('733049910872815764', 5))