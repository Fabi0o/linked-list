import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const next = this.head;
    this.head = new Node(value, next);
  }

  toString() {
    let string = "";
    let current = this.head;

    if (!this.head) return "null -> null";

    while (current != this.tail) {
      string += `(${current.value}) -> `;
      current = current.nextNode;
    }

    string += this.tail ? `${this.tail.value} -> null` : "null";

    return string;
  }
}
