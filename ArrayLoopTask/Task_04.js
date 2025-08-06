const statement = 'I am a hard working person';

// const reverseSentance = statement.split(" ").reverse().join(" ");
// console.log(reverseSentance);
let sentance = '' ;
const words = statement.split(" ");
for ( let i = words.length-1; i >= 0 ; i--){
sentance += words[i] + " ";

}

console.log(sentance);