class Cart{
    constructor(goods = []){
        this.goods = goods;
        this.totalPrice = 0;
        this.count = 0;
    }

    addGoods(item) {
        item.count = 1;
        this.goods.push(item);
        this.increaseCount(item.count);
        this.calculateGoodsPrice();
    }

    getTotalPrice(){
        return this.totalPrice;
    }

    increaseCount(count){
        this.count += count;
    }

    calculateGoodsPrice(){
        let totalPrice = 0;
        this.goods.forEach(item => {
        let sum = item.price * item.count;
        totalPrice += sum * ((100 - item.discount) / 100);
        });
        this.totalPrice = totalPrice;
    }

    clear() {
        this.goods = [];
        this.totalPrice = 0;
        this.count = 0;
    }

    print() {
        return `${JSON.stringify(this.goods)} \n
    \n Общая стоимость: ${this.getTotalPrice()} руб.`;
    }
}

class Goods {
    constructor(price, name, discount){
        this.price = price;
        this.name = name;
        this.discount = discount;
    }
}

class FoodGoods extends Goods{
    constructor(price, name, discount, callories){
        super(price, name, discount);
        this.callories = callories;
    }
}
class СlothingGoods extends Goods{
    constructor(price, name, discount, clothing){
        super(price, name, discount);
        this.clothing = clothing;
    }
}
class TechnicsGoods extends Goods{
    constructor(price, name, discount, technics){
        super(price, name, discount);
        this.technics = technics;
    }
}
const cartItem = new Cart();

cartItem.addGoods(new СlothingGoods(100, 'Кофта', 10, 'Хлопок'));
cartItem.addGoods(new TechnicsGoods(1000, 'Весы', 0, 'Для кухни'));


console.log(cartItem.print())