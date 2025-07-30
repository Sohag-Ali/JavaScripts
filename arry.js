const numbers = [1, 2, 3, 4, 5];    

console.log(numbers.length); // Output: 5

console.log (numbers.indexOf(3)); // Output: 2
console.log (numbers[4]);

numbers.push(6); // Adds 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
numbers[3] = 10;
console.log(numbers); // Changes the value at index 3 to 10f

numbers.pop(); // Removes the last element (6)
console.log(numbers); // Output: [1, 2, 3, 4,
numbers.shift(); // Removes the first element (1)
console.log(numbers); // Output: [2, 3, 4, 10]
numbers.unshift(0); // Adds 0 to the beginning of the array
console.log(numbers); // Output: [0, 2, 3, 4,
numbers.slice(2, 5); // Returns a new array with elements from index 1 to 2
console.log(numbers); // Output: [0, 2, 3, 4,

console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(9)); // Output: false