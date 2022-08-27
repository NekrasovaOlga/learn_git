/*
Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


 4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел
*/


function randomNumber(length, max, min, type) {
    let arrRandomNumber = [];
    arrRandomNumber.length = length;
    
    if (max < min) return randomNumber(length, min, max, type);
  
    for (let i = 0; i < arrRandomNumber.length; i++) {  
     let newCount = randomCount(max,min,type);
     
     if(type == 'even'){
        while(newCount%2){
            newCount = randomCount(max,min,type);
        }
     }
     if(type == 'odd'){
        while(!(newCount%2)){
            newCount = randomCount(max,min,type);
        }  
     }
     arrRandomNumber[i] = newCount;
    }
  
    return arrRandomNumber;
  }
  
function randomCount(max,min,type){
    return Math.ceil(Math.random() * (max - min) + min);
}

console.log(randomNumber(10, 10, 100, 'odd'));
  