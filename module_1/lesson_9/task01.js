/* 
Создайте файл cart.js, подключите к html-файлу

Создайте объект cart — корзина

Объект будет содержать следующие свойства:

items = пустой массив - это товары
totalPrice = 0 - общая стоимость корзины
count = 0 - количество товаров
и методы

getTotalPrice - получить общую стоимость товаров
add - добавить товар
increaseCount - увеличить количество товаров
calculateItemPrice - посчитать общую стоимость товаров
clear - очистить корзину
print - распечатать корзину


Далее описание каждого метода

getTotalPrice()

метод возвращает значение свойства totalPrice

calculateItemPrice()

пересчитывает стоимость всей корзины и записывает значение в totalPrice 

increaseCount()

Принимает один параметр(число)

Увеличивает свойство count на это число

add()

Принимает три параметра:

название товара
цену товара
количество товара (опциональный параметр, по умолчанию 1 товар)
этот метод формирует объект из полученных параметров и добавляет его в свойство items

так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

clear()

Очищает полностью нашу корзину, возвращает все значения в изначальные

print()

Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

Для проверки работы функционала добавить 3 или более товаров в корзину

После вызвать метод print для вывода информации в консоль
*/

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(item, price, quantity = 1) {
    const newObj = {
      item: item,
      price: price,
      quantity: quantity,
    }
    this.items.push(newObj);
    this.count += quantity;
    this.totalPrice += price * quantity;

  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  calculateItemPrice() {},
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  },
  print() {
    return `${JSON.stringify(this.items)} \n\n Общая стоимость: ${this.totalPrice} руб.`;
  },
};

console.log()

cart.add('Товар', 100)
cart.add('Чашка большая', 200, 300)
cart.add('Пляжное полтенце', 1200, 3)
cart.add('Шлепанцы', 2200, 2)

console.log(cart.print())

