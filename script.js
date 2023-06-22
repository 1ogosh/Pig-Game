'use strict';

//Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');//то же но по айди
const diceElement = document.querySelector('.dice');

//Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

