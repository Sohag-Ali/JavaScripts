let num = 200

if (num > 0) {

    for (let i = 1; i <= num; i++) {
        if ( i === 100) {
            console.log(i);
            break;
        }
        console.log(i);
    }

}
else {
    console.log("Number is not greater than 0.");
}

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/