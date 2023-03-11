/*function barTriang(p1, p2, p3) {
   let array = [...p1, ...p2, ...p3]
   let x = 0;
   let y = 0;

   for (let i = 0; i < array.length; i+=2) {
      x+= array[i]
      y+= array[i+1]
   }
   
   return [+((x/3).toFixed(4)), +((y/3).toFixed(4))]
}*/


function barTriang(p1, p2, p3) {
   return [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
         +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)]
}


barTriang([4, 6], [12, 4], [10, 10])