// const numbers = [300, 100, 700,1200];

// const products = [
//     {name: 'shampoo', price: 300},
//     {name: 'chiruni', price: 100},
//     {name: 'shirt', price: 700},
//     {name: 'pant', price: 1200}
// ]

// function getShoppingToal ( products) {
//     let total = 0;
//     for (const product of products){
//         total = total + product.price;
//     }
//     return total;
// }
// console.log(getShoppingToal(products));

// function discountPrice(quantity){
//     if(quantity <= 100){
//         const total = quantity *100;
//         return total;
//     }
//     else if(quantity <= 200){
//         const total = quantity *90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//     return total;
//     }
// }
// const total = discountPrice(201);
// console.log(total);

// *******layer discount**********

function layerDiscountTotal ( quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity *first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 *first100Price;
        const remaningQuantity = quantity - 100 ;
        const remaningTotal = remaningQuantity * second100Price;
        const total = first100Total + remaningTotal ;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
         const second100Total = 100 * second100Price;
        const remaningQuantity = quantity - 200 ;
        const remaningTotal = remaningQuantity * above200Price;
        const total = first100Total + second100Total + remaningTotal ;
        return total;
    }
}

console.log(layerDiscountTotal(201));
