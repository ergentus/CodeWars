function mygcd(x, y) {
   if (!y) {
      return x;
   }

   return mygcd(y, x % y);
}