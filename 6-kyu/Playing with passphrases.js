/*
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"
 */

function playPass(s, n) {
   const ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   s = s.split('')
      .map(e => ab.indexOf(e) > -1 ? ab[(ab.indexOf(e) + n) > 25 ? ab.indexOf(e) + n - 26 : ab.indexOf(e) + n] : e)
      .map(e => Number(e) || e === '0' ? 9 - Number(e) : e)
      .map((e, i) => i % 2 === 0 ? e : e.toString().toLowerCase())
      .reverse().join('')

   return s
}

console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2))