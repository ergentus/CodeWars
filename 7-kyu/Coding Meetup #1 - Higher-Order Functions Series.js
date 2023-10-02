/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
 */
const list =[
   {"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
   {"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},
   {"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"},
   {"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"},
   {"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},
   {"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
   {"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},
   {"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},
   {"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},
   {"firstName":"Thomas","lastName":"L.","country":"Canada","continent":"Americas","age":38,"language":"Java"},
   {"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"}]

function countDevelopers(list) {
   return   list.filter( e => e.continent === 'Europe' && e.language === 'JavaScript').length
}

console.log(countDevelopers(list))