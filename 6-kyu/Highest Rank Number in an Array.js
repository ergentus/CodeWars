/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */

function highestRank(arr) {
   const obj = {}
   const maxKeys = []

   for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] + 1 || 1
   }

   const maxValue = Math.max(...Object.values(obj))

   for (const key in obj) {
      if (obj[key] === maxValue) {
         maxKeys.push(key)
      }
   }

   return Math.max(...maxKeys)
}

console.log(highestRank([12, 10, 12, 12, 7, 6, 4, 10, 10]))