'use strict';

(() => {
  const OPTION_RUS = ['ножницы', 'камень', 'бумага'];
  // const OPTION_ENG = ['rock', 'paper', 'scissors'];

  const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

  const game = (language) => {
    const result = {
      user: 0,
      computer: 0,
    };

    return function start() {
      const gameRules = {
        'камень': {
          'камень': 0,
          'ножницы': 1,
          'бумага': 0,
        },
        'ножницы': {
          'камень': 0,
          'ножницы': 0,
          'бумага': 1,
        },
        'бумага': {
          'камень': 1,
          'ножницы': 0,
          'бумага': 0,
        },
      };

      let userVale = prompt('Выберите камень, ножницы или бумага?');

      if (!isNaN(userVale)) {
        const exit = confirm('Закончить игру?');
        if (exit) {
          const finallyStatus = status(result.computer, result.user);
          const finallyReasult = `Компьютер ${result.computer}
Пользователь ${result.user}
\n${finallyStatus}`;
          return alert(`Игра окончена\n\n${finallyReasult}`);
        } else {
          return start();
        }
      }
      for (const elem of OPTION_RUS) {
        if (elem.indexOf(userVale.toLowerCase()) > -1) {
          userVale = elem;
        }
      }

      if ([...OPTION_RUS].indexOf(userVale) === -1) {
        return start();
      }

      const computerValue = OPTION_RUS[getRandom(0, 2)];

      const resultComputer = gameRules[computerValue][userVale];
      const resultUser = gameRules[userVale][computerValue];

      const statusResult = status(resultComputer, resultUser);

      result.computer += resultComputer;
      result.user += resultUser;

      alert(`Компьютер ${result.computer}
Пользователь ${result.user}
\n${statusResult}`);

      return start();
    };
  };

  // eslint-disable-next-line require-jsdoc
  function status(resultComputer, resultUser) {
    const status = ['Победа', 'Поражение', 'Ничья'];
    if (resultComputer > resultUser) {
      return status[1];
    }
    if (resultComputer < resultUser) {
      return status[0];
    }
    if (resultComputer === resultUser) {
      return status[2];
    }
  }

  window.PRG = game;
})();
