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

    while (tmp) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }

    string += "null";

    return string;
  }

  size() {
    let size = 0;
    let tmp = this.head;

    while (tmp) {
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

    while (tmp && tmp.nextNode) tmp = tmp.nextNode;

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

  contains(value) {
    let tmp = this.head;

    while (tmp) {
      if (tmp.value == value) return true;
      tmp = tmp.nextNode;
    }

    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;

    while (tmp) {
      if (tmp.value == value) return index;
      tmp = tmp.nextNode;
      index += 1;
    }

    return null;
  }

  insertAt(value, index) {
    if (index >= this.size()) {
      console.log(
        `Index number to high! Max index number to insert for this list is ${
          this.size() - 1
        }`
      );
      return;
    }

    const newNode = new Node(value, this.at(index));
    this.at(index - 1).nextNode = newNode;
  }

  removeAt(index) {
    if (index >= this.size()) {
      console.log(`No item of index ${index}`);
      return;
    }

    this.at(index - 1).nextNode = this.at(index + 1);
  }
}
