// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
//
//    Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
//
// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']
//
// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.


// function sortArray(a1, a2) {
//    return a2.sort((x, y) => {
//       const i1 = a1.findIndex(a => a[0] === x[0])
//       const i2 = a1.findIndex(a => a[0] === y[0])
//       return i1 - i2
//    })
// }
//
const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// function sortArray(a1, a2) {
//
//    let result = []
//
//    for (let i = 0; i < a1.length; i++) {
//       for (let j = 0; j < a2.length; j++) {
//          if (a1[i][0] === a2[j][0]) {
//             result.push(a2[j])
//             console.log(result)
//          }
//       }
//    }
//    return result
// }

const sortArray = (a1, a2) => a1.map(v => a2.find(w => v[0] === w[0]))

console.log(sortArray(a1, a2))