//Q8. Write a JavaScript program to sort the characters in a string alphabetically


function sortStr(s) {
  let arr = s.split("");
  arr = arr.sort();
  let ans = arr.join("");
  return ans;
}

let s = "fjsalkdfja";
s = sortStr(s);
console.log(s);
