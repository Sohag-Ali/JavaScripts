function oddAverage(numbers){
let sum = 0;
const odds = [];
for(const number of numbers){
    if(number % 2 !==0){
        odds.push(number);
        sum += number ;
    }
}
// for (const number of odds){
//      sum += number ;
// }
const result = sum / odds.length;
return result;
// console.log (odds);
}
const numbers = [42, 13, 58, 65, 81, 96, 7 ,105];
const avg = oddAverage(numbers);
console.log(`Average of the odd numbers is : ${avg}`);