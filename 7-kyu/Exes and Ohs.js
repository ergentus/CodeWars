/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
   // const newStr = str.toLowerCase().replace(/[^ox]/g,'').split('')
   //
   // const a = newStr.reduce((acc, e) => {
   //    acc[e] ? acc[e]++ : acc[e] = 1
   //    return acc
   // }, {})
   // return a.x === a.o

   const x = str.match(/x/gi)
   const o = str.match(/o/gi)
   return (x && x.length) === (o && o.length)
}

console.log(XO('ooxdXm'))