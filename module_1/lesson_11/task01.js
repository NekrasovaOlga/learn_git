'use strict';

/*
Установить и настроить ESLint
Проверьте файл cart.js на ошибки

Сделайте скриншот и пришлите его


Исправить все ошибки на которые укажет ESLint
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

