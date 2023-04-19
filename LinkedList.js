import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) this.prepend(value, null);
    else {
      let tmp = this.head;

      while (tmp.nextNode) tmp = tmp.nextNode;

      tmp.nextNode = new Node(value, null);
    }
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

  size() {
    let size = 0;
    let tmp = this.head;

    while (tmp != null) {
      size += 1;
      tmp = tmp.nextNode;
    }

    return size;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    let tmp = this.head;

    while (tmp && tmp.nextNode != null) tmp = tmp.nextNode;

    return tmp;
  }

  at(index) {
    let tmp = this.head;

    for (let i = 0; i < index; i++) {
      if (!tmp) return tmp;

      tmp = tmp.nextNode;
    }

    return tmp;
  }

  pop() {
    let tmp = this.head;

    while (tmp && tmp.nextNode.nextNode) tmp = tmp.nextNode;

    tmp.nextNode = null;
  }
}
