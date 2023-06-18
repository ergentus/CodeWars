function superSum(n) {
   debugger
   if (n === 0) return 0

   let _args = []

   return function helper(...args) {
      _args = [..._args, ...args]

      if (_args.length >= n) {
         _args.length = n

         return _args.reduce((acc, prev) => acc + prev)
      } else {
         return helper
      }
   }
}

superSum(2)(3)(3, 5)