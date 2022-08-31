'use strict';

(() => {
  const multiplicity = ['Четное', 'Нечетное'];
  const randomMod = (min, max) => Math.round(Math.random() * (max - min) + min);


  const game = (value) => {
    const result = {
      user: 5,
      computer: 5,
      sequence: value,
    };

    return function start() {
      // подсчет шаров после каждого хода
      // eslint-disable-next-line require-jsdoc
      function ballCounting(playerOne, playerTwo, count, text) {
        if (count > result[playerTwo]) {
          result[playerOne] += result[playerTwo];
          result[playerTwo] = 0;
        } else {
          result[playerOne] += count;
          result[playerTwo] -= count;
        }
        return alert(`${text} забирает шарики`);
      }
      // выход из игры или продолжение
      // eslint-disable-next-line require-jsdoc
      function exit(question) {
        let exit = confirm(question);
        if (question === 'Хотите сыграть еще?') {
          exit = !exit;
          result.computer = 5;
          result.user = 5;
        }
        if (exit) {
          return alert('Игра окончена!');
        } else {
          return start();
        }
      }
      // Ход Игрока
      if (result.sequence === true) {
        const userValue = parseInt(prompt(`У вас ${result.user} шариков, сколько готовы поставить? `));

        if (isNaN(userValue)) {
          return exit('Закончить игру?');
        }

        if (userValue > result.user) {
          return start();
        }
        const randomValue = randomMod(0, 1);

        console.log(`Игрок загадал ${userValue} - Бот выбрал ${multiplicity[randomValue]}`);

        if (userValue % 2 === randomValue) {
          ballCounting('computer', 'user', userValue, 'Бот');
        } else {
          ballCounting('user', 'computer', userValue, 'Игрок');
        }
      } else { // Ход бота
        const userСhoice = confirm('Число четное?') === false ? 1 : 0;
        const randomCountBot = randomMod(1, result.computer);

        console.log(`Бот загадал ${randomCountBot} - Игрок выбрал ${multiplicity[userСhoice]}`);

        if (randomCountBot % 2 === userСhoice) {
          ballCounting('user', 'computer', randomCountBot, 'Игрок');
        } else {
          ballCounting('computer', 'user', randomCountBot, 'Бот');
        }
      }

      console.log(`У бота ${result.computer} шариков, у вас ${result.user}`);

      if (result.computer === 0 || result.user === 0) {
        return exit('Хотите сыграть еще?');
      }
      // Передаем право хода другому игроку
      result.sequence = !result.sequence;

      return start();
    };
  };

  window.murable = game;
})();
