/* 
Получите от пользователя 2 числа

Напишите функцию нахождения минимального числа, без использования 
условного оператора, циклов и массивов
*/

function minNumber(a,b){
 return (a + b - Math.abs(a-b))/2
}

console.log(minNumber(96,20))