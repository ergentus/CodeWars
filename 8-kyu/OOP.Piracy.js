/**
 * Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
 */


function Ship(draft, crew) {
   this.draft = draft,
   this.crew = crew//,
      // this.isWorthIt = function () {
      //    return this.draft - (this.crew * 1.5) > 20
      // }
}

Ship.prototype.isWorthIt = function() {
   return this.draft - (this.crew * 1.5) > 20
}

let aWorthyShip = new Ship(35, 1)
console.log(aWorthyShip)
aWorthyShip.isWorthIt()

console.log(aWorthyShip.isWorthIt())