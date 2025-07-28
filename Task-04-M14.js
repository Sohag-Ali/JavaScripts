/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your score: ", function (yourScoreInput) {
  const yourScore = parseFloat(yourScoreInput);

  if (isNaN(yourScore) || yourScore < 0 || yourScore > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
    rl.close();
    return;
  }

  if (yourScore > 80) {
    // Inside your friend's score check
    rl.question("Enter your friend's score: ", function (friendScoreInput) {
      const friendScore = parseFloat(friendScoreInput);

      if (isNaN(friendScore) || friendScore < 0 || friendScore > 100) {
        console.log("Invalid friend's score. Must be between 0 and 100.");
      } else {
        if (friendScore > 80) {
          console.log("Go for a lunch.");
        } else if (friendScore >= 60) {
          console.log("Tell your friend: Good luck next time.");
        } else if (friendScore >= 40) {
          console.log("Keep your friend's message unseen.");
        } else {
          console.log("Block your friend.");
        }
      }

      rl.close();
    });
  } else {
    console.log("Go home and sleep and act sad.");
    rl.close();
  }
});
