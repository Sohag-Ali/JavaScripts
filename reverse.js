const sentence = "i am sohag";

// let reverse = ''

// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

const reversed = sentence.split(' ').reverse().join(' ');
console.log(reversed);