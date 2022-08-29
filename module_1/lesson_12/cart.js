'use strict';

/*
Продолжим работу в cart.js из предыдущего урока

Методы объекта cart не должны обращаться к объекту по имени

В объект cart добавьте сеттер setDiscount и свойство discount

Сеттер setDiscount будет принимать promocode

если promocode будет строка METHED, то в discount будет добавляться значение 15
если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21

метод calculateItemPrice должен учитывать скидку
 равную процентному значению discount
*/

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice(this.items);
  },
  count: 0,
  discount: 0,
  add(item, price, quantity = 1) {
    const newObj = {
      item,
      price,
      quantity,
    };
    this.items.push(newObj);
    this.increaseCount(quantity);
  },
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      return this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      return this.discount = 21;
    }
  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  calculateItemPrice(items) {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice * ((100 - this.discount) / 100);
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


cart.setDiscount('NEWYEAR');

console.log(cart.totalPrice);


