const rps = (p1, p2) => {
   if (p1 === p2) return 'Draw!'

   if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
      return `Player 1 won!`
   }
   return `Player 2 won!`
}


console.log(rps('rock', 'paper'));

/**
 * const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  }
  
  if (p2 === rules[p1]) {
    return 'Player 1 won!'
  }
  
  return 'Player 2 won!'
};
 */