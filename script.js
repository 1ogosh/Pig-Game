'use strict';

//Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');//то же но по айди
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

//Roll the dice

btnRoll.addEventListener('click', function () {
        //Gen random num

        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber);

        //Display num on dice

        diceElement.classList.remove('hidden');
        diceElement.src = `dice${diceNumber}.png`;

        //If the num is 1, switch to the next player, if not - add number to the current score
        if (!diceNumber !== 1) {
                currentScore += diceNumber;
                current0Element.textContent = currentScore;
        }else {
                
        }

});

