//Q24. Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.


let jsonString = '{"name": John" "age": "30"}';
try {
    let obj = JSON.parse(jsonString);
    console.log(obj);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON format");
    } else {
        console.log("Error:", error.message);
    }
}


