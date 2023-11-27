/*
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
 */

const encryptThis = function(text) {
   const result = []
   const arr = text.split(' ')

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 2) {
         result.push(arr[i][0] + arr[i][arr[i].length-1] + arr[i].slice(2, arr[i].length-1) + arr[i][1])
      }  else {
         result.push(arr[i])
      }
   }

   return result.map(e => e.charCodeAt(0) + e.slice(1)).join(' ')
}

console.log(encryptThis("A wise old owl lived in an oak"))