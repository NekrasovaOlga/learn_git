/*
Напишите функцию генератор  массива случайных чисел в файле task01.js

Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;
*/


function randomNumber(length){
 let arrRandomNumber = []
 arrRandomNumber.length = length

 for(let i = 0; i<arrRandomNumber.length; i++){
  arrRandomNumber[i] = Math.ceil(Math.random() * (100 - 1)+1)
 }

 return arrRandomNumber
}

console.log(randomNumber(20))