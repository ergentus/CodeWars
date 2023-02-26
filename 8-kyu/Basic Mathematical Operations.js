function basicOp(operation, value1, value2) {
   switch (operation) {
      case '+':
         return value1 + value2;
      case '-':
         return value1 - value2;
      case '*':
         return value1 * value2;
      case '/':
         return value1 / value2;
      default:
         return operation + ' is not operator. Change arrguments.'
   }
}

console.log(basicOp('g', 4, 6));
