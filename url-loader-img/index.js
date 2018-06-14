import './styles.css';
import webImg from './web.jpg'
import { firstMessage, delayedMessage } from './message';
import render from './render';

document.write('Hola Mundo!!! ', firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src', webImg)

render(img)

console.log('Hola mundo');