/* Stampare una lista della spesa in un ul container usando un while loop */

const container = document.querySelector('.container');


// lista della spesa
const shoppingArray = [
    'Latte',
    'Uova', 
    'Pane',
    'Hamburger',
    'Stracchino'
]


// while loop
let i = 0;
while(i < shoppingArray.length){
    let shoppingEl = document.createElement('li');
    shoppingEl.append(shoppingArray[i]);
    container.append(shoppingEl);
    i++;
}