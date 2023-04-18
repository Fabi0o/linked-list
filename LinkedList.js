import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const next = this.head;
    this.head = new Node(value, next);
  }

  toString() {
    let string = "";
    let tmp = this.head;

    if (!this.head) return "null -> null";

    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }

    string += "null";

    return string;
  }
}
