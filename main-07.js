//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

const repeatString = (str, n, div) => {
   return str.concat(div).repeat(n).slice(0, -1)
}

console.log(repeatString('yo', 5, '1123poa1 '))
console.log(repeatString('yo', 3, ' ')) //"yo yo yo"
console.log(repeatString('yo', 3, ',')) // "yo,yo,yo"
console.log(repeatString('yo', 3, ', ')) // "yo, yo, yo"
console.log(repeatString('yo', 0, ', ')) // ""
console.log(repeatString('yo', 1, ', ')) // "yo"


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

const checkStart = (str, part) => {
   const regex = new RegExp(`^${part}`, 'i')
   return regex.test(str)
}

console.log(checkStart('Incubator', 'inc'))
console.log(checkStart('Incubator', 'yo'))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (str, char) => {
   return str.slice(0, char) + '...'
}

console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.

const getMinLengthWord = (str) => {
   return typeof str !== 'string' || !str
      ? null
      : str.split(' ').sort((a, b) => a.length - b.length)[0]
}

console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'))
console.log(getMinLengthWord(''))
console.log(getMinLengthWord(123))
console.log(getMinLengthWord(true))
console.log(getMinLengthWord(undefined))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCase = (str) => {
   return str.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
}

console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ'))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов с учётом повторяющихся символов в подстроке

// for (let i = 0; i < substr.length; i++) {
//    if (!str.toLowerCase().includes(substr[i].toLowerCase()))
//    return false
// }
//    return true

function isIncludes(str, substr) {
   const regex = new RegExp([...substr].join('.*?'), 'i')

   console.log(regex)
   // return [...substr].every(s => str.match(new RegExp(s, 'i')))
   return regex.test(str)
}

console.log(isIncludes('Incubator', 'Cut')) // true
console.log(isIncludes('Incubator', 'table'))// false
console.log(isIncludes('Incubator', 'inbba')) // true //*false
console.log(isIncludes('Incubator', 'inba')) // true  //*true
console.log(isIncludes('Incubator', 'Incubatorrr')) // true //*false





  




