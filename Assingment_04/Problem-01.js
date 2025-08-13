function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    
    let surcharge = fare * 0.20;
    let extraCharge = 30;
    let total = fare + surcharge + extraCharge;

    return total;
}


console.log (totalFine(220));