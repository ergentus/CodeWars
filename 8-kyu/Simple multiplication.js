//This kata is about multiplying a given n by eight if it is an even n and by nine otherwise.

const simpleMultiplication = (n) => n * (n % 2 ? 9 : 8)