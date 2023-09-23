Array.prototype.myFlat = function (d = 1/0) {
   let newArr = []

   for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && d > 0) {
      newArr = newArr.concat(this[i]).myFlat(d - 1)
      } else {
         newArr.push(this[i])
      }
   }

   return newArr
}

console.log([[[3, 7], 5], 3, 7, 8].myFlat(1))