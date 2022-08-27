/*
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться
*/


const promocodeMETHED = 10
const promocodeG3H2Z1 = 500
const amountThreshold = 30000
const amountThresholdDiscount = 15
const quantityTotal = 10
const quantityTotalDiscount = 3



function calculate(sumTotal, quantity, promocode){
    let discountedAmount;
    if(quantity > quantityTotal){
        discountedAmount = sumTotal - (sumTotal * (quantityTotalDiscount/100))
    } else{
        discountedAmount = sumTotal
    }
    if(sumTotal > amountThreshold){
        discountedAmount = discountedAmount -((sumTotal - amountThreshold) * (amountThresholdDiscount/100))
    }
    if(promocode == "METHED"){
        discountedAmount = discountedAmount - (discountedAmount * (promocodeMETHED/100))
        
    }
    if(promocode == "G3H2Z1" && discountedAmount > 2000){
        discountedAmount = discountedAmount-promocodeG3H2Z1
    }
    return discountedAmount
}

console.log(calculate(31000, 19, "METHED" ))
console.log(calculate(10000, 9, "G3H2Z1" ))



