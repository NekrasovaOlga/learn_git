'use strict';

/*
Продолжим работу с cart.js
Обнаружена уязвимость в нашем функционале
Если после добавления последнего товара присвоить к totalPrice любое значение,
например

cart.totalPrice = 10;

то при выводе print() общая стоимость корзины будет равна 10
Чтобы это предотвратить, необходимо свойство totalPrice сделать,
геттером который будет возвращать результат вызова метода calculateItemPrice

метод getTotalPrice больше не нужен

calculateItemPrice переделать таким образом, чтобы сумму он возвращал,
 а не записывал в свойство totalPrice

Вызов метода calculateItemPrice оставить только у геттера totalPrice
*/

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice(this.items);
  },
  count: 0,
  add(item, price, quantity = 1) {
    const newObj = {
      item,
      price,
      quantity,
    };
    this.items.push(newObj);
    this.increaseCount(quantity);
  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  calculateItemPrice(items) {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  },
  print() {
    return `${JSON.stringify(this.items)} \n
    \n Общая стоимость: ${this.totalPrice} руб.`;
  },
};


cart.add('Товар', 100);
cart.add('Чашка большая', 200, 300);
cart.add('Пляжное полтенце', 1200, 3);
cart.add('Шлепанцы', 2200, 2);

console.log(cart.print());

console.log(cart.totalPrice);

