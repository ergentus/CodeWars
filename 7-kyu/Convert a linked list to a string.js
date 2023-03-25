class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

function stringify(list) {

   if (list) { 
      return `${list.data} -> ${stringify(list.next)}`
   }
   return 'null'
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))))