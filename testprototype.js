const students = [
   {
      id: 1,
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85,
   },
   {
      id: 2,
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
   },
   {
      id: 3,
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
   },
   {
      id: 4,
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
   },
   {
      id: 5,
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
   },
   {
      id: 6,
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
   },
];

const user = {
   id: 7,
   name: "Rick",
   age: 23,
   isMarried: false,
   scores: 135,
}


//1. Вывести массив с именами, в котором все имена будут прописаны большими буквами
console.log(students.map(s => s.name))

// 2. Вывести данные студентов с баллами >= 100
console.log(students.filter(s => s.scores >= 100))

//3. Сформируйте массив холостых студентов
console.log(students.filter(s => s.isMarried === true))

//4. Объект user добавить в массив
let copyStudents = [...students, user]
console.log(copyStudents)

//5. Удалить студента "John"
console.log(students.filter(s => s.name !== 'John'))

//6***. Ник женился и в списке нужно заменить его статус на true
console.log(students.map(s => {
   if (s.name === 'Nick') {
      s.isMarried = true
   }
   return s
}))


//7. Проверка на четность или не четность, вывод: "Четный" или "Нечетный"
const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd'

console.log(evenOrOdd(7))
console.log(evenOrOdd(8))

//8. Создайте функцию, делится ли число n на оба числа x и y без остатка, return true or false.

function isDivisible(n, x, y) {
   return n % x === 0 && n % y === 0
}
console.log(isDivisible(3, 3, 4))
console.log(isDivisible(12, 3, 4))

//9. Максимально сократить код

// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }

function describeAge(age) {
   if (age > 65) return "You're a(n) elderly"
   if (age > 19) return "You're a(n) adult"
   if (age > 13) return "You're a(n) teenager"
   return "You're a(n) kid"
}

console.log(describeAge(7))


Array.prototype.newFilter = function newFilter(func){         //(function(s) => hello)
   const result = []
   for (let i = 0; i < this.length; i++) {
      if (func(this[i]) === true) {
         result.push(this[i])
      }
   }
   return result
}

console.log(students.newFilter(e => e.name === 'John'))

Array.prototype.newMap = function newMap(func) {
   const result = []
   for (let i = 0; i < this.length; i++) {
      result[i] = func(this[i]);
   }
   return result
}

console.log(students.newMap(e => e.scores * 2))

Array.prototype.newReduce = function newReduce(func, acc=0) {
   for (let i = 0; i < this.length; i++) {
      func(acc = acc + this[i])
   }
   return acc
}

const arr =[1,3,4,5,6]
console.log(arr.newReduce((acc, e) => acc + e))
