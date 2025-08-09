function canPay (changeArray, totalDue){
 if (changeArray.length === 0){
    return "No Change"
 }
 let total = 0;
 for (const single of changeArray) {
    total += single;
 }
 if (total >= totalDue) {
    return true

 }
 else {
    return false
 }
}

console.log(canPay([],10))