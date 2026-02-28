//Q12. Write a JavaScript function to validate whether a given value is RegExp or not.


function checkRegEx(s) {
  return Object.prototype.toString.call(s) === "[object RegExp]";
}

let s = /aba/;
console.log(checkRegEx(s));
