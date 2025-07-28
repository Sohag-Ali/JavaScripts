/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your age: ", function (ageInput) {
  const age = parseInt(ageInput);

  rl.question("Are you a student? (yes/no): ", function (isStudent) {
    const regularFare = 800;
    let fare;

    if (isNaN(age) || age < 0) {
      console.log("Invalid age input.");
    } else if (age < 10) {
      fare = 0;
      console.log("You are a child. Ticket is free.");
    } else if (isStudent.toLowerCase() === "yes") {
      fare = regularFare * 0.5;
      console.log("You are a student. Ticket fare: " + fare + " tk");
    } else if (age >= 60) {
      fare = regularFare * 0.85;
      console.log("You are a senior citizen. Ticket fare: " + fare + " tk");
    } else {
      fare = regularFare;
      console.log("Regular ticket fare: " + fare + " tk");
    }

    rl.close();
  });
});
