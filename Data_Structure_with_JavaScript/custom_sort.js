console.log(`Here we will learn the custom sort
in JavaScript. We will use the following array as an example.\n`)

const array = [1,2,3,4,8,9,10,5,6,7,-5]

console.log(`${array}`)

console.log(`\nLet's see what happens if we use
the built in sort function to sort the above array\n`)

console.log(array.sort())

console.log(`\nFrom above output we can see that the built in sort
works like the lexicographically sorting aproach and so 10 is before 2,3,4 etc.
that's why we need to customize the sort function.\n`)
console.log(array.sort( (a, b) => a - b ))

console.log(`Now, we can see that the array is sorted in ascending order perfectly.
We should always keep in mind to sort an array in custom manner we need to pass
a compareFn function as a parameter of the sort function.
\nThis compare Function used to determine the order of the elements.\nIt is expected to return :\n
1) A negative value if first argument is less than second argument,
2) Zero if they're equal and
3) A positive value otherwise.
If omitted, the elements are sorted in ascending, ASCII character order.\n`)

console.log(`\nHere is going the custom sort where the even elements will be appeared in first position
and odd should be then.`)
console.log(array.sort((a, b) => Math.abs(a)%2 - Math.abs(b)%2))

console.log(`\nHere is going the custom sort where the odd elements will be appeared in first position
and even should be then.`)
console.log(array.sort((b, a) => Math.abs(a)%2 - Math.abs(b)%2))