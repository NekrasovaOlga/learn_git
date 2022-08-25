/* 
✔ Создайте файл tasks.js 
✔ Подключите его к index.html
✔ Создайте константу rain
✔ с помощью Math.Random и Math.round напишите выражение, которое будет возвращать 1 или 0
✔ Далее используя условную конструкцию выведите сообщение,
если rain = 1
Пошёл дождь. Возьмите зонт!
если rain = 0
Дождя нет!
*/

const rain = Math.round(Math.random() * (1 - 0))
if(rain == 1){
    console.log('Пошёл дождь. Возьмите зонт!')
} else {
    console.log('Дождя нет!')
}



/*Третья задача:

✔ Выполняем в файле tasks.js

✔ Артур хочет поступить на бюджет в институт, для этого ему нужно хорошо сдать три экзамена и набрать минимум 265 баллов.

✔ Напишите программу, которая запрашивает у пользователя (prompt) результаты экзаменов по трём направлениям и проверяет, поступил он в институт или нет.

Пример:
Введите кол-во баллов по математике: 85
Введите кол-во баллов по русскому языку: 75
Введите кол-во баллов по информатике: 95
Поздравляю, вы поступили на бюджет!

*/

const subjectMath = +prompt('Введите кол-во баллов по математике:', '');
const subjectRussian = +prompt('Введите кол-во баллов по русскому языку:', '');
const subjectInformatics = +prompt('Введите кол-во баллов по информатике:', '');

const threshold = subjectMath + subjectRussian + subjectInformatics
if(threshold > 265){
    console.log('Поздравляю, вы поступили на бюджет!')
} else {
    console.log('Теперь только на платное поступать :(')
}

/*
Четвёртая задача:

✔ Выполняем в файле tasks.js
✔ Вам необходимо написать программу для банкомата, который может выдавать минимальные купюры 100р
✔ Владимир хочет снять деньги в банкомате, с помощью prompt спросите сколько денег он хочет снять
✔ Ваша программа должна проверить, сможет ли банкомат выдать сумму, которую запросил Владимир
✔ Выведите сообщение в консоль

*/

const money = +prompt('Сколько денег хотите снять:', '');

if(money < 100 || money%100 != 0){
 console.log('Банкомат не может вывести такую сумму')
}