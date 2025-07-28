
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter your weight in kilograms (kg): ", function (weightInput) {
  const weight = parseFloat(weightInput);


  rl.question("Enter your height in meters (m): ", function (heightInput) {
    const height = parseFloat(heightInput);

    if (isNaN(weight) || isNaN(height) || height === 0) {
      console.log("Invalid input. Please enter numeric values.");
    } 
    else {
      const bmi = weight / (height * height);

      console.log(`Your BMI is: ${bmi.toFixed(2)}`);

      if (bmi < 18.5) {
        console.log("You are underweight.");
      } 
      else {
        
        if (bmi <= 24.9) {
          console.log("You are normal.");
        } 
        else {
          
            if (bmi <= 29.9) {
            console.log("You are overweight.");
          } 
          else {
            console.log("You are obese.");
          }
        }
      }
    }

    rl.close();
  });
});
