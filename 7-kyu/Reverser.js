function reverse(n) {

   if (n === 0) return 0

   let x = Math.pow(10, Math.floor(Math.log10(n)))

   return ((n % 10) * x) + reverse(Math.floor(n / 10))
}