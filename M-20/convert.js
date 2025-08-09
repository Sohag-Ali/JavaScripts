function inchToFeet(inch) {
    const feetFraction = inch / 12 ;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = `${feetNumber} ft ${inchRemaining} inch`;
    return result;
}
const sohagHeight = inchToFeet(75);
console.log(sohagHeight);

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(`${mileToKilometer(4)} Kilo`);