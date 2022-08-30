'use strict';

(() => {

  const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

  const getOptions = lang => {
    const options = {
      ENG: {
        option: ['rock', 'paper', 'scissors'],
        gameRules: {
          'rock': {
            'rock': 0,
            'scissors': 1,
            'paper': 0,
          },
          'scissors': {
            'rock': 0,
            'scissors': 0,
            'paper': 1,
          },
          'paper': {
            'rock': 1,
            'scissors': 0,
            'paper': 0,
          },
        },
        message: 'Choose rock, scissors or paper?',
        exitGameQuastion: 'Finish the game?',
        user: 'User',
        computer: 'A computer',
        status: ['Win', 'Loss', 'Draw'],
        gameeOver: 'The game is over!',
      },
      RUS: {
        option: ['ножницы', 'камень', 'бумага'],
        gameRules: {
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
        },
        message: 'Выберите камень, ножницы или бумага?',
        exitGameQuastion: 'Закончить игру?',
        user: 'Пользователь',
        computer: 'Компьютер',
        status: ['Победа', 'Поражение', 'Ничья'],
        gameeOver: 'Игра окончена!',
      },
    };
    if (lang === 'EN' || lang === 'ENG') {
      return options.ENG;
    } else {
      return options.RUS;
    }
  };

  const game = (language) => {
    const result = {
      user: 0,
      computer: 0,
    };

    const lang = getOptions(language);

    return function start() {
      const gameRules = lang.gameRules;
      let userVale = prompt(lang.message);

      if (!isNaN(userVale)) {
        const exit = confirm(lang.exitGameQuastion);
        if (exit) {
          const finallyStatus = status(result.computer,
            result.user, lang.status);
          const finallyReasult = `${lang.computer} ${result.computer}
${lang.user} ${result.user}
\n${finallyStatus}`;
          return alert(`${lang.gameeOver}\n\n${finallyReasult}`);
        } else {
          return start();
        }
      }
      for (const elem of lang.option) {
        if (elem.indexOf(userVale.toLowerCase()) > -1) {
          userVale = elem;
        }
      }

      if ([...lang.option].indexOf(userVale) === -1) {
        return start();
      }

      const computerValue = lang.option[getRandom(0, 2)];

      const resultComputer = gameRules[computerValue][userVale];
      const resultUser = gameRules[userVale][computerValue];

      const statusResult = status(resultComputer, resultUser, lang.status);

      result.computer += resultComputer;
      result.user += resultUser;

      alert(`${lang.computer} ${result.computer}
${lang.user} ${result.user}
\n${statusResult}`);

      return start();
    };
  };

  // eslint-disable-next-line require-jsdoc
  function status(resultComputer, resultUser, statusArr) {
    const status = statusArr;
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
