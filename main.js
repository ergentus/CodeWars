const td_1 = 'qw-34'
const td_2 = 'uy-87'

const todoLists = [
   {
      id: td_1,
      title: 'What to learn',
      filter: 'all',
   },
   {
      id: td_2,
      title: 'What to buy',
      filter: 'all',
   },
]


const tasks = {
   td_1: [
      { id: 1, title: "HTML", isDone: false },
      { id: 2, title: "CSS", isDone: false },
      { id: 3, title: "JS/TS", isDone: false },
   ],
   td_2: [
      { id: 4, title: "Bread", isDone: false },
      { id: 5, title: "Milk", isDone: false },
      { id: 6, title: "Chicken", isDone: false },
   ]
}

const addTodoList = (title) => {
   const td_id = ' jh-21'

   const newTodo = {
      id: td_id,
      title: title,
      filter: 'all'
   }
   const updatedTodos = [...todoLists, newTodo]
   console.log(updatedTodos)

   const copyTasks = {
      ...tasks,
      [td_id]: []
   }

   console.log(copyTasks)
}

addTodoList('What to drink tonight')

const array = [2, 4, 5, 3, 7, 6]

array.reduce((acc, el) => {
   return acc + el
}, 0)

let students = [
   {
      id: 1,
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
   },
   {
      id: 2,
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 89
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
      age: 26,
      isMarried: false,
      scores: 100
   }
];

const names = students.map(st => st.name)
console.log(names);

const rNames = students.reduce((newArr, el) => {
   newArr.push(el.name)
   return newArr
}, [])

console.log(rNames);