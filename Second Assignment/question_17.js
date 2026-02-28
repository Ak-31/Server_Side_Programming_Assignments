//Q17. Write a JavaScript function to split a string and convert it into an array of words.
function getWordArray(s) {
  let arr = s.split(" ");
  return arr;
}

let s = "Today is sunday";
console.log(getWordArray(s));
