import '../css/styles.css';
import webImg from '../images/web.jpg'
import { firstMessage, delayedMessage } from './message';
import render from './render';

document.write('Hola Mundo!!! ', firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src', webImg)
img.setAttribute('style', 'width:20%')

render(img)

console.log('Hola mundo');