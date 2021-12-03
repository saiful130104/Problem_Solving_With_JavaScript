// the target of the tips and tricks is to resize any array

const animals = [1,2,3,4,5,6];

// we can do it just using the length property of an array.
// just reassign the length of an array to our target length.
// see the bellow code for better understanding;

console.log(animals);
animals.length = 7;
console.log(animals);
animals.length = 4;
console.log(animals);