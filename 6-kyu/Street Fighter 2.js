/*
Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
 */

function streetFighterSelection(fighters, [i,j], moves) {
   return moves.map(move => {
      if (move === 'up') i = 0
      if (move === 'down') i = 1
      if (move === 'left') j = (j - 1 + 6) % 6
      if (move === 'right') j = (j + 1 + 6) % 6

      return fighters[i][j]
   })
}

let fighters = [
   ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
   ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
]
let position = [0, 0]
let moves = ['up', 'left', 'right', 'left', 'left']

console.log(streetFighterSelection(fighters, position, moves))