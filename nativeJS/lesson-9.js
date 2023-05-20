const delay = (ms) => {
   return new Promise((resolve, reject) => {
      resolve()
   })
}


// console.log(delay(2000).then(() => console.log('Done')))

console.log(1)

setTimeout(() => {
   Promise.resolve().then(() => {
      console.log(3)
   })
   console.log(2)

},1000)

new Promise((res, reject) => {
   console.log(4)
   res(5)
}).then((data) => {
   console.log(data)

   Promise.resolve().then(() => {
      console.log(6)
   }).then(() => {
      console.log(7)

   setTimeout(() => {
      console.log(8)
   },0)
   })
})

setTimeout(() => {
   console.log(9 )
})
console.log(10)

1-4-10-5-6-7-2-3-9-8