'use strict';

/* ------Selecting Elements-----*/
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const activePlayer = document.querySelector('.player--active');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const holdPlayer = document.querySelector('.btn--hold');
const bnNEW = document.querySelector('.btn--new');
/* ------END Selecting Elements -----*/

/*-------- Switch plyer function ------*/
const SwitchPlayer = () => {
  document.getElementById(`current--${active}`).textContent = '0';
  current = 0;
  active = active === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
  // activePlayer.add('player--active');
};
// let current = 0
//   let current2 = 0;
//   let active = 0;
//   const scores = [0, 0];
//    player = true;

let current, current2, active, scores, player;
/* ----- initialization The Game -----*/

score0.textContent = 0;
score1.textContent = 0;
const init = () => {
  current = 0;
  current2 = 0;
  active = 0;
  scores = [0, 0];
  player = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  diceEl.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};
init();
/*----------End-Variables --------------*/

// diceEl.classList.remove('dice');

// Rolling a dice

btnRoll.addEventListener('click', () => {
  if (player) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // if its one current element
    if (dice !== 1) {
      current += dice;
      document.getElementById(`current--${active}`).textContent = current;
    }

    // Switchting player
    else {
      // player = false;
      SwitchPlayer();
    }
  }
  // Holding The data
  holdPlayer.addEventListener('click', () => {
    if (player) {
      // current = score0;
      scores[active] += current;
      document.getElementById(`score--${active}`).textContent = scores[active];

      // Switch Player
      SwitchPlayer();

      // hubi in qiimaha uu leekaaday 100 hduu lee kaadona win soo qor
      if (scores[active] >= 100) {
        player = false;
        document
          .querySelector(`.player--${active}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${active}`)
          .classList.remove('player--active');
      }
    }
  });
  // selecting btn new game
  btnNew.addEventListener('click', init);
});
