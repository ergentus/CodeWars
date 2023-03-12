let students = [
   {
      name: "Bob",          // ["Bob",]
      age: 22,
      isMarried: true,
      scores: 85,
   },
   {
      name: "Alex",  // ["Bob", "Alex]
      age: 21,
      isMarried: true,
      scores: 89
   },
   {
      name: "Nick", // ["Bob", "Alex", "Nick"]
      age: 20,
      isMarried: false,
      scores: 120
   },
   {
      name: "John", //["Bob", "Alex", "Nick", "John"]
      age: 19,
      isMarried: false,
      scores: 100
   }
];

const getNames = (array) => {
   const result = []

   for (let i = 0; i < array.length; i++) {
      result[i] = array[i].name
   }

   return result
}



const getScores = (array) => {
   const result = []

   for (let i = 0; i < array.length; i++) {
      result[i] = array[i].scores
   }
   return result
}


const newArr = []
const sPop = (array) => {
   const lastElement = array[array.length - 1]
   for (let i = 0; i < array.length - 1; i++) {
      newArr[i] = array[i]
   }
   return lastElement
}

console.log(sPop(students));
console.log(newArr);

const arr = [1, 2, 3, 4]
let symbol = 'qwe'

const sJoin = (arr, symbol) => {
   let string = arr[0]

   for (let i = 1; i < arr.length; i++) {
      string += symbol + arr[i]
   }

   return string
}

console.log(sJoin(arr , symbol));

