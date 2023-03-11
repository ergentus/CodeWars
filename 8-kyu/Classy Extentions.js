class Cat extends Animal {
   speak() {
      return this.name + ' meows.'
   }
}

let cat = new Cat('Mr Whiskers')
console.log(cat.speak())