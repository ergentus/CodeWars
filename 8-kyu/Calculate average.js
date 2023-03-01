function findAverage(array) {
   return array.length
      ? array.reduce((acc, e) => acc + e) / array.length
      : 0
}