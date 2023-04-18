import LinkedList from "./LinkedList.js";

const list = new LinkedList();
list.prepend("world");
list.prepend("hello");

console.log(list.toString());
