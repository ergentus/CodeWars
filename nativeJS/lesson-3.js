const students = [
   {
      id: 1,
      name: 'Bob',
      age: 22,
      isMarried: true,
      scores: 85,
      // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
   },
   {
      id: 2,
      name: 'Alex',
      age: 21,
      isMarried: true,
      scores: 90,
   },
   {
      id: 3,
      name: 'Nick',
      age: 20,
      isMarried: false,
      scores: 120,
   },
   {
      id: 4,
      name: 'John',
      age: 19,
      isMarried: false,
      scores: 100,
   },
   {
      id: 5,
      name: 'Helen',
      age: 20,
      isMarried: false,
      scores: 110,
   },
   {
      id: 6,
      name: 'Ann',
      age: 20,
      isMarried: false,
      scores: 105,
   },
];

const user = {
   name: 'Bob',
   age: 23,
   friends: ['Alex', 'Nick', 'John'],
}

const superUser = {
   name: 'Bob',
   age: 23,
   friends: [
      {
         id: 1,
         name: 'Ann',
         age: 22,
         isMarried: true,
         scores: 85,
      },
      {
         id: 2,
         name: 'Alex',
         age: 21,
         isMarried: true,
         scores: 90,
      },
      {
         id: 4,
         name: 'John',
         age: 19,
         isMarried: false,
         scores: 100,
      },
   ],
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = {...user, friends: [...user.friends]}
console.log(deepCopyUser)
console.log(deepCopyUser === user)
console.log(deepCopyUser.friends === user.friends)
//2. Создайте полную (глубокую) массива students
let deepCopyStudents = [students.map(s => ({...s}))]
console.log(deepCopyStudents === students)

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = {...superUser, friends: superUser.friends.map(e => ({...e}))}

console.log(deepCopySuperUser === superUser)
console.log(deepCopySuperUser.friends === superUser.friends)
console.log(deepCopySuperUser.friends[0] === superUser.friends[0])
console.log(deepCopySuperUser.friends[1] === superUser.friends[1])
console.log(deepCopySuperUser.friends[2] === superUser.friends[2])


//4. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores)
console.log(sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(s => s.scores >= 100)
console.log(bestStudents)

//6. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name)
console.log(studentsNames)

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick)
console.log(studentsWithMarriedNick[2])

// Внесите  следующие изменения в объект superUser:
//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {...superUser, friends: superUser.friends.filter(s => s.id !== 1)}
console.log(superUserCorrect1.friends)

//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {...superUser, friends: superUser.friends.map(s => s.id === 2 ? {...s, name: 'Dondal'} : s)}
console.log(superUserCorrect2)
console.log(superUserCorrect2.friends[1])

//11. добавьте в список друзей нового друга
const newFriend = {
   id: 5,
   name: 'Nick',
   age: 27,
   isMarried: false,
   scores: 99,
}
let superUserCorrect3 = {...superUser, friends: [...superUser.friends, newFriend]}
console.log(superUserCorrect3)
// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*

let bestStudent = students[0]
for (let i = 1; i <= students.length - 1; i++) {
   if (students[i].scores > bestStudent.scores) {
      bestStudent = students[i]
   }
}
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = students.map(s => s.scores).reduce((acc, e) => acc + e)
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   return students.map(s => ({...s, friends: students.map(e => e.name).filter(n => n !== s.name)}))
}

console.log(addFriends(students))
addFriends(students)

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents = (students, best = 1) => {
   let tail = []
   if (best > students.length) {
      for (let i = 0; i < best - students.length; i++) {
         tail.push(null)
      }
   }

   return best <= 1
      ? [...students.sort((a, b) => b.scores - a.scores).splice(0, best)][0]
      : best > students.length
         ? [...students.sort((a, b) => b.scores - a.scores)].concat(tail)
         : [...students.sort((a, b) => b.scores - a.scores).splice(0, best)]
}
console.log(getBestStudents(students, 10))
getBestStudents(students)



