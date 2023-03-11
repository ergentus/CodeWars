function updateLight(current) {
   const traffic = {
      green: 'yellow',
      yellow: 'red',
      red: 'green'
   }

   return traffic[current]

}