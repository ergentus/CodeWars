function mygcd(x, y) {
   if (!y) {
      return x;
   }

   return mygcd(y, x % y);
}
console.log(mygcd(34, 18));

console.log(18 % 12);
console.log(6 % 12);
console.log(12 % 6);

