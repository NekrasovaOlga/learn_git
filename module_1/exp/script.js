'use strict';

const rpg = window.PRG();

const gameOver = rpg();
if (gameOver !== undefined) {
  const murable = window.murable(gameOver);
  murable();
}

