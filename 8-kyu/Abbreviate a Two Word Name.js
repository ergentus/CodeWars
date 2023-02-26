/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

alternative solution------------------------------------------------ 
let nameArray = name.split(" ");
return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
*/

function abbrevName(name) {
      return name = name.split(' ')
      .map((el) => el[0].toUpperCase())
      .join('.')
}

console.log(abbrevName("qXeCMt KjgpwzWwNSNYTOv"))