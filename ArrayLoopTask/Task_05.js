const original = [1, 2, 3];

const copy = [...original];

copy[0] = 99;

console.log("Original:", original); 
console.log("Copy:", copy);         