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
  get squareWidth() {
    return `${this.width} см`;
  },
  set squareWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    } else {
      this.width;
    }
  },
  get squareHeight() {
    return `${this.height} см`;
  },
  set squareHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    } else {
      this.height;
    }
  },
};

rectangle.squareHeight = 'asd';
console.log(rectangle.squareHeight);
