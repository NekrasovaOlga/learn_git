'use strict';

/*
Переписать игровой бот из 8-го задания
Функционал остаётся прежний, но вместо цикла (while или for)
используйте рекурсию

*/

const randomCount = Math.ceil(Math.random() * (100 - 1) + 1);

// eslint-disable-next-line require-jsdoc
function quiz(number = prompt('Введите число: ')) {
  const userNumber = number;
  if (userNumber === null) {
    return console.log('Конец игры!');
  }
  if (isNaN(userNumber)) {
    console.log('Это не число!');
    return quiz();
  }
  if (userNumber < randomCount) {
    console.log('Больше!');
    return quiz();
  }
  if (userNumber > randomCount) {
    console.log('Меньше!');
    return quiz();
  }
  if (+userNumber === randomCount) {
    return console.log('Правильно!');
  }
}

quiz();
