// We know that there is six falsy values in JavaScript.
// They are: 
//     undefined, null, NaN, 0, ""(empty string), and false


// The target of this tips is to remove all falsy values from a Array.
// Suppose an array named "example" is like bellow:
// example = [1, 'one',NaN, 0, null, "", undefined, false, "false",'0']
// the output array should be like: example = [1, 'one', "false", '0']

console.log("Remove falsy values from array");
const example = [1, 'one',NaN, 0, null, "", undefined, false, "false",'0'];
console.log(example.filter(Boolean));

// Let's try learn why/how this is work
// array.filter is an built in function that takes a callback function as a parameter.
// and Boolean is a function where if we give an expression as a parameter,
// it will return Ture or False. for example,
// Boolean(10 < 1) // false, Boolean(10 > 1) //true