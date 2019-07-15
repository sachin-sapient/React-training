let text = '';
let nodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
for ( let node of nodes ) {
    text += node.textContent[0];
}
console.log( text );