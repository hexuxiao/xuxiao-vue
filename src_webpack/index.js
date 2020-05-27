
import mycss from './public/css/index.css';
import src from './public/images/12.jpg';
let pNode = document.createElement('p');
pNode.innerText = 'hello';
document.querySelector('#root').appendChild(pNode);
let a = 100;
let imgNode = new Image();
imgNode.src = src;
document.querySelector('#root').appendChild(imgNode);