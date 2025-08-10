const jim = 59;
const tim = 89 ;
const kim = 68;

if ( jim > tim && jim > kim ){
    console.log("jim is the boss");
}
else if (kim > tim && kim > jim){
    console.log("kim is the boss");
}
else {
    console.log("tim is the boss");
}

function maxOfThree (num1, num2, num3){
    if ( num1 > num2 && num1 > num3 ){
    console.log("num1 is the boss");
}
else if (num2 > num1 && num2 > num3){
    console.log("num2 is the boss");
}
else {
    console.log("num3 is the boss");
}
}

maxOfThree(23,50,34);

const max = Math.max(12,34,65,45,7,3,543);
console.log('max number is' , max);