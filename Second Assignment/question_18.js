//Q18. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.


function switchCases(str) {
  let n = str.length;
  let ans = "";

  for (let i = 0; i < n; i++) {
    if (str[i].toLowerCase() === str[i]) {
      ans += str[i].toUpperCase();
    } else ans += str[i].toLowerCase();
  }

  return ans;
}

let s = "Server Side Programming Lab";
console.log(switchCases(s));
