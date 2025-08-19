// console.log('appendfile loaded');

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

const placeSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Place of Birth';
placeSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Dhaka';

ul.appendChild(li1);
placeSection.appendChild(ul);


mainContainer.appendChild(placeSection);