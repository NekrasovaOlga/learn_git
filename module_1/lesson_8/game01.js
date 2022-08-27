/*
Создайте файл game01.js

Написать простой игровой бот, который умеет следующее:

Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.
*/

const randomCount = Math.ceil(Math.random() * (100-1) + 1);


function quiz(number = prompt('Введите число: ') ){
 let userNumber = number;
 if(userNumber == null){
    return console.log('Конец игры!');
 }
 if(isNaN(userNumber)){
   console.log('Это не число!');
   return quiz()
 }
 if(userNumber < randomCount){
    console.log('Больше!');
    return quiz()
 }
 if(userNumber > randomCount){
    console.log('Меньше!');
    return quiz()
 }
 if(userNumber == randomCount){
    return console.log('Правильно!');
 }
}

quiz()