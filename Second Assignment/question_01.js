// Q1. Write a JavaScript program to find all the index positions of a given word within a given string.


let line = "This is a js program. js is a widely used programming language";
let searchWord = "js";

let idx = 0;
let indices = [];

while (true) {
  let index = line.indexOf(searchWord, idx);
  if (index === -1) break;

  indices.push(index);
  idx = index + 1;
}

console.log(indices);
