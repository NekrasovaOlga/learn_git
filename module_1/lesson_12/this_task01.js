'use strict';
/*

Создать объект rectangle, который описывает
ширину и высоту (свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины
и высоты и два геттера для получения периметра и площади прямоугольника

Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"
пример "40см"

По умолчанию значения высоты и ширины заданы 5 см
*/

const rectangle = {
  width: 5,
  height: 5,
  perimeter: 0,
  square: 0,
  get recSquare() {
    return `${this.height * this.width} см`;
  },
  set recWidth(val) {
    if (typeof val === 'number') {
      this.square = val;
    } else {
      this.width;
    }
  },
  get recPerimeter() {
    return `${(this.height + this.width) * 2} см`;
  },
  set recHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    } else {
      this.height;
    }
  },
};

rectangle.recHeight = 10;
console.log(rectangle.recPerimeter);
console.log(rectangle.recSquare);

