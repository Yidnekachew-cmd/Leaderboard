import './index.css';
import scoreAdd from './modules/addScore.js';
import getScore from './modules/getScore.js';

// selecting elements
const scoreContainer = document.querySelector('.score-container');
const refreshScore = document.querySelector('.refresh');
const submitScore = document.querySelector('.submit');
const msg = document.querySelector('.msg');

refreshScore.addEventListener('click', (event) => {
  event.preventDefault();
  getScore(scoreContainer);
});

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  scoreAdd(scoreContainer, user, score, msg);
});
