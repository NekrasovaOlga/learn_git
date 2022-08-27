/*
Напишите функцию getAveragePriceGoods

для получения средней цены товара

Дан многомерный  массив:

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.
*/

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

function getAveragePriceGoods([...allСashbox]){
 const newallСashbox = allСashbox;
 const quantityItem = newallСashbox.map(item => x += item[0], x = 0).reverse()[0];
 const subtotalItem = newallСashbox.map(item =>  x += item[1], x = 0).reverse()[0];
 return Math.ceil(subtotalItem/quantityItem)
}


console.log(getAveragePriceGoods(allСashbox))



