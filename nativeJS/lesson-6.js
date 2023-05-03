//1. Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с green,
// на yellow, на red, а затем greenснова.
// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние
// источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.
// Например, когда вход равен green, вывод должен быть yellow.
// но без использования if else

function updateLight(current) {
   const traffic = {
      green: 'yellow',
      yellow: 'red',
      red: 'green',
   }

   return traffic[current]
}

console.log(updateLight('green'))
updateLight('green') //"yellow"
updateLight('yellow')/// "red"
updateLight('red') //"green"

//2. Ты в зоопарке... все сурикаты выглядят странно. Что-то пошло не так — кто-то поменял местами головы и хвосты!
// Спасите животных, переключив их обратно. Вам будет предоставлен массив, который будет иметь три значения (хвост, тело, голова).
// Ваша задача — переупорядочить массив так, чтобы животное располагалось в правильном порядке (голова, тело, хвост).
// То же самое касается всех других массивов/списков, которые вы получите в тестах: вы должны изменить позиции элементов
// с той же точной логикой.

function fixTheMeerkat(arr) {
   return arr.reverse()
}

console.log(fixTheMeerkat(['tails', 'body', 'heads']))
fixTheMeerkat(['tail', 'body', 'head']) //["head", "body", "tail"]);
fixTheMeerkat(['tails', 'body', 'heads']) // ["heads", "body", "tails"]);
fixTheMeerkat(['bottom', 'middle', 'top'])// ["top", "middle", "bottom"]);


//3. Функция должна возвращает количество (количество) гласных в заданной строке.
// Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
   return str.replace(/[^aeiou]/gi, '').length
}

console.log(getCount('abracadabra'))
// 5


//4.Чтобы найти объем (в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу:
// volume = Length * Width * Height
// Но кто-то забыл использовать надлежащий учет, поэтому у нас есть только объем и длина одной стороны!
// Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда (= является кубом).
// Возврат true, если кубоид может иметь равные стороны, возврат falseв противном случае.
// Возврат falseтакже для недопустимых чисел (например, объем или сторона меньше или равна 0).
// Примечание: сторона будет целым числом

let cubeChecker = function (volume, side) {
   return volume >= 0 && volume / side ** 3 === 1
}

console.log(cubeChecker(8, 2))
cubeChecker(56.3, 1)// false
cubeChecker(-1, 2)// false
cubeChecker(8, 3)// false
cubeChecker(8, 2)// true
cubeChecker(-8, -2) //false


//5.Функция должна возвращать словарь/объект/хэш с ключом "status", значение которого может: "busy"или "available"в
// зависимости от значения истинности аргумента is_busy.
// Но, как вы увидите после нажатия RUNили ATTEMPTв этом коде есть несколько ошибок, пожалуйста, исправьте их.

function getStatus(isBusy) {
   let msg = (isBusy ? 'busy' : 'available')
   return {
      status: msg,
   }
}

// 6. Увеличение всех элементов массива на 1: (map)
const arr1 = [1, 2, 3, 4, 5].map(e => e + 1)
console.log(arr1)

//7. Преобразование массива строк в массив их длин: (map)
const arr2 = ['apple', 'banana', 'cherry', 'date'].map(e => e.length)
console.log(arr2)
//8. Преобразование массива объектов, извлечение определенного свойства: вывести все элементы со свойством name в отдельный массив

const arr3 = [
   {name: 'John', age: 30},
   {name: 'Jane', age: 25},
   {name: 'Bob', age: 40},
]

const allNames = arr3.map(e => e.name)
console.log(allNames)
//9. Преобразование массива чисел в их квадраты:
const arr4 = [2, 4, 6, 8, 10]
console.log(arr4.map(e => e ** 2))

//10 Преобразование массива дат в их строковое представление:
const arr = [new Date(), new Date(), new Date()].map(String)
console.log(arr)

const array = [1, 2, 3, 4]

for (let i = 0; i < array.length; i++) {
   setTimeout(() => console.log('index:' + i), 3000)
}


