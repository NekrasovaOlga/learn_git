/*
Напишите функцию isPrime.

Она принимает число и возвращает true, если число является простым, а в ином случае false.



Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.

Например, 5 - простое число, так как делится без остатка только на 1 и на себя.

151, 911, 1987 - так же простые числа

Используйте цикл for в функции

*/

function isPrime(number) {
  let status = true;
  if (number === 2) {
    return true;
  }
  if (number % 2 == 0 || number < 0) {
    return false;
  }
  let numberСheck = Math.ceil(Math.sqrt(number));

  for (let i = 2; i <= numberСheck; i++) {
    if (number % i == 0) {
      status = false;
      break;
    }
  }

  if (status == false) {
    return false;
  } else {
    return true;
  }
}

console.log(isPrime(151)); // -> true
console.log(isPrime(9)); // -> false
console.log(isPrime(19)); // -> true
console.log(isPrime(21)); // -> false
