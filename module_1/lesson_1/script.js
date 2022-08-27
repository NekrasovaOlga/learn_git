'use strict';

{
    const item = "Носки фиолетовые";
    const quantity = 10;
    const category = "Носки";
    const price = 100;
    
    console.log('Название товара:', item);
    console.log('Количество товара:', price * quantity, 'руб.' );
}

{
    const item = "Кружка 300 мл, MILLIMI Милый дом, керамика";
    const quantity = 100;
    const category = "Кружки";
    const price = 250;

    console.log('Название товара:', item);
    console.log('Количество товара:', price * quantity, 'руб.' );
}


{
    /* Неособо поняла пункт "убедитесь что количество и цена тип данных numbers, если это не так, то поправьте" 
    идей было две, через if как сейчас, или перед promt поставить + чтобы конвертировать в number
    */
    const item = prompt('Введите наименование товара: ', '');
    let quantity = prompt('Введите количество товара: ', '');
    const category = prompt('Введите категорию товара: ', '');
    let price = prompt('Введите цену за один товар: ', '');
    
    console.log(typeof quantity)
    console.log(typeof price)

    if(typeof quantity !== 'number'){
        quantity = prompt('Количество товара не является числом, введите значение снова: ', '');
    }
    if(typeof price !== 'number'){
        quantity = prompt('Цена товара не является числом, введите значение снова: ', '');
    }
    console.log(`На складе ${quantity} единицы товара "${item}" на сумму ${quantity*price} деревянных`)
}