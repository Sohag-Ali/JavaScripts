var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = '';

// for (const number of numbers) {
//     result += number;
// }

for ( let i=0 ; i < numbers.length ; i ++){
    result += numbers[i];
}
console.log (typeof result);
console.log (result);