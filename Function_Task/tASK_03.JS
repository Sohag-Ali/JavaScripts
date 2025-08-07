// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values


function make_avg(arr, size) {
    if (size === 0) return 0;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

let numbers = [10, 20, 30, 40, 50];
let average = make_avg(numbers, numbers.length);
console.log("Average:", average); 
