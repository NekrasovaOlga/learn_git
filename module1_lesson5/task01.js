/*
Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

1 евро = 1.2 доллара,

1 доллар = 64 рубля.
*/

const USD = 1.2;
const RUB = 64;

function purchaseRubles(totalSum){
    let euroTotalSum = totalSum*RUB
    return Math.ceil((euroTotalSum/USD)*100)/100
}

console.log(purchaseRubles(100))