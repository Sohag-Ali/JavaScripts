const numbers = [1,3,2,6,5,1,6];
numbers.forEach(num =>{
    const double = num *2;
    console.log(double);
})

const getherthan10 = numbers.filter(x => x > 10)

console.log(getherthan10);

const evenNumber = numbers.filter(num => num %2 === 0)

console.log(evenNumber);

const firstEven = numbers.find( x => x % 2 === 0)

console.log(firstEven);

const students = 