import render from './render';
import makeMessage from './make-message';

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk('Han pasado 3 segundos');
  }, 3000)
});

module.exports = {
  firstMessage: 'Hola mundo con babel',
  delayedMessage: async () => {
    const message = await waitTime
    const element = makeMessage(message)
    render(element)
  }
}