const names = ['Donald', 'Alex', 'Bob']

console.log(names.sort())
//1. сортирует строки 'из коробки' т.е. без доп параметров

const names_2 = ['Donald', 'alex', 'aLEx', 'Alex', 'игорь', 'Bob', 'юрий']
console.log(names_2.sort())
//2. сортирует по алфавиту unicode

console.log(names)
//3. работает мутабельно

console.log(names.sort() === names)
//4. возвращшает ссылку на исходный массив

const nums = [1000, 333, 9999, 77, -3]

console.log(nums.sort())
//5. для всех остальных случаев необходимо параметром передать функцию сравнения
// callback

const compFunc = (a, b) => { // по возрастанию
   if (a > b) { //надо поменять местами
      return 1
   } else {
      return -1
   }
}

console.log(nums.sort(compFunc))


const students = [
   {
      name: 'Bob',
      age: 22,
      isMarried: true,
      scores: 95,
   },
   {
      name: 'Alex',
      age: 22,
      isMarried: true,
      scores: 89,
   },
   {
      name: 'Helge',
      age: 22,
      isMarried: true,
      scores: 90,
   },
   {
      name: 'Nick',
      age: 20,
      isMarried: false,
      scores: 120,
   },
   {
      name: 'John',
      age: 19,
      isMarried: false,
      scores: 121,
   },
   {
      name: 'alex',
      age: 22,
      isMarried: true,
      scores: 89,
   },
];

const sortByName = (a, b) => {
   if (a.name.toUpperCase() > b.name.toUpperCase()) return 1
   else return -1
}

// console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
//8. сортировка массива объектов по строкам

console.log(students.sort((a, b) => a.age - b.age))
//9. сортировка массива объектов по числам

let array = [444, -3, 100, 77, 324, 999]
let count = 0
let replace = 0
for (let j = 0; j < array.length - 1; j++) {
   debugger
   let isSorted = true

   for (let i = 0; i < array.length - 1 - j; i++) {
      count++
      if (array[i] > array[i + 1]) {
         replace++
         // let temp = array[i + 1]
         // array[i + 1] = array[i]
         // array[i] = temp
         [array[i], array[i + 1]] = [array[i + 1], array[i]]
         isSorted = false
      }
   }
   if (isSorted) break
}
console.log(count)
console.log(replace)

let array2 = [444, -3, 100, 77, 324, 999]
console.log(array2.map(String))
