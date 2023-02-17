function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter((el) => el ? true : false).length
}

/**
 * function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter(Boolean).length
}
 * 
 * 
 */