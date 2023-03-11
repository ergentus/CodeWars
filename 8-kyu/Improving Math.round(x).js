Math.roundTo = function (number, precision) {
   const rouder = Math.pow(10, precision)
   return Math.round(number * rouder) / rouder
}