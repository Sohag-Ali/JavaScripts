const numbers = [12, 98, 5, 41, 23, 78, 46];
const array = [];
for ( let i = 0; i < numbers.length ; i++){
    if ( numbers[i] % 2 === 0){
       array.push(numbers[i]);
    }
}
console.log(array);