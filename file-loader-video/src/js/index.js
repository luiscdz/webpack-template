import '../css/styles.css';
import webImg from '../images/web.jpg'
import { firstMessage, delayedMessage } from './message';
import render from './render';
import videoPlazi from '../video/que-es-core_1.mp4';

document.write('Hola Mundo!!! ', firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src', webImg)
img.setAttribute('style', 'width:20%')

render(img)

const video = document.createElement('video')
video.setAttribute('src', videoPlazi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)

render(video)

console.log('Hola mundo');