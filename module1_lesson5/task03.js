/*
Напишите функцию, которая принимает строку и возвращает обратную строку
Пример: "Привет мир" => "рим тевирП"
*/

function reverseText(text){
    let textArr = text.split('').reverse();
    return textArr.join('')
}

console.log(reverseText("Привет мир"))