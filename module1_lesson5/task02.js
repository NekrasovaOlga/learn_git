/*
Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие

Пример:  "привет Мир" => "Привет мир"
*/

function lowerCaseText(text){
return text[0].toUpperCase() + text.toLowerCase().substring(1)
}

console.log(lowerCaseText('привет Мир'))