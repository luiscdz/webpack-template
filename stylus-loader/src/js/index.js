import '../css/styles.css';
import webImg from '../images/web.jpg'
import { firstMessage, delayedMessage } from './message';
import render from './render';
import videoPlazi from '../video/que-es-core_1.mp4';
import data from './teachers.json';
import '../css/teachers.scss';
import '../css/teachers.styl';

console.log(data)
const ul = document.createElement('ul');
ul.setAttribute('class', 'Teachers');

data.teachers.forEach(teacher => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  ul.appendChild(element)
  
});
render(ul)

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