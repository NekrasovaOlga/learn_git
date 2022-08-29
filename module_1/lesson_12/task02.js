'use strict';

/*
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.

Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив.
Если сумма больше 50-ти, то функция возвращает этот массив.

*/
const arr = [2, 10, 4];

/*
 * It returns 10
 */
const recursiveFunc = ([...arr]) => {
  let x;
  const masNumber = arr;
  const sumArr = masNumber.map((item) => (x += item), (x = 0)).reverse()[0];
  if (sumArr > 50) return console.log(masNumber);
  masNumber.push(Math.round(Math.random() * 10));
  return recursiveFunc(masNumber);
};

recursiveFunc(arr);
