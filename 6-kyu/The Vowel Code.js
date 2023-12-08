/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:


Explain
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
 */

const vowels = ['a', 'e', 'i', 'o', 'u']

function encode(string) {
   return string.split('').map(e => vowels.indexOf(e) + 1 || e).join('')
}

function decode(string) {
   return string.split('').map(e => vowels[+e - 1] || e).join('')
}

console.log(encode('hello'))
console.log(decode('h2ll4'))