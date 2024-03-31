// 1. Change the player names to me & neightbor, code here is tested in browser
// https://imgur.com/a/SYsmqcO
document.getElementById('p1-name').textContent = 'Mike';
document.getElementById('p2-name').textContent = 'Neighbour';

// 2. Swap player symbols
let tempContent = document.getElementById('p1-symbol').textContent;
document.getElementById('p1-symbol').textContent = document.getElementById('p2-symbol').textContent;
document.getElementById('p2-symbol').textContent = tempContent;

// change subtitle to "A game you know and love"
document.querySelector('h2').textContent += ' and love';