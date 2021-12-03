// Our target is to convert any type of value in boolean that means
// true or false.

const value = 'value';
const boolValue1 = !!value;
const boolValue2 = Boolean(value);
// we can achieve this two ways.
// 1) using two !! before any value like the above 5th line
// 2) using the Boolean function like above 6th line.
// now we can check the result like following:

console.log({value});
console.log({boolValue1});
console.log({boolValue2});
console.log(typeof value);
console.log(typeof boolValue1);
console.log(typeof boolValue2);