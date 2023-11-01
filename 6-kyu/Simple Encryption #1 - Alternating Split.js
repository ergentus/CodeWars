/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */

function encrypt(text, n) {
   if (!text) return text

   let arr = text.split('')
   for (let i = 0; i < n; i++) {
      arr = arr.filter((e, i) => i % 2).concat(arr.filter((e, i) => i % 2 === 0))
   }

   return arr.join('')
}

function decrypt(encryptedText, n) {
   if (!encryptedText || n <=0) return encryptedText
   const arr = Array(encryptedText.length)

   while (n--) {
      let j = 0
      for (let i = 1; i < arr.length; i += 2) {
         arr[i] = encryptedText[j++]
      }
      for (let i = 0; i < arr.length; i += 2) {
         arr[i] = encryptedText[j++]
      }
      encryptedText = arr.join('')
   }
   return encryptedText
}

console.log(encrypt('0123456', 1))
console.log(decrypt('1350246', 1))