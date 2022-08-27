/*
Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией

Функция принимает еще два параметра n и m

Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/

function randomNumber(length, max, min) {
  let arrRandomNumber = [];
  arrRandomNumber.length = length;

  if (max < min) return randomNumber(length, min, max);

  for (let i = 0; i < arrRandomNumber.length; i++) {
    arrRandomNumber[i] = Math.ceil(Math.random() * (max - min) + min);
  }

  return arrRandomNumber;
}

console.log(randomNumber(20, -10, 20));
