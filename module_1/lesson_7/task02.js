/*
Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

*/

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(allСashbox){
 let allSum = allСashbox.reduce((sum,item) => {
    return sum+item;
 })
 return allSum/allСashbox.length;
}

console.log(getAverageValue(allСashbox));