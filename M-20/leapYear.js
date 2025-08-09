function leapYear ( year){
    if (year % 4 === 0 && year % 100 !== 0 ){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    
    else{
        return false;
    }
}

const isLeapYear = leapYear(2100);
const isLeapYear2 = leapYear(2400);
const isLeapYear3 = leapYear(1900);
const isLeapYear4 = leapYear(2052);
const isLeapYear5 = leapYear(25000);
const isLeapYear6 = leapYear(2600);
console.log(isLeapYear,isLeapYear2,isLeapYear3,isLeapYear4,isLeapYear5,isLeapYear6);