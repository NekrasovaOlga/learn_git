/*
Создайте файл task04.js

Необходимо написать функцию, которая принимает 2 параметра n и m

И возвращает массив с високосными годами в диапазоне между n и m

Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/


function leapYear(year){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function arrLeapYear(min,max){
    if(max < min) return arrLeapYear(max,min);
    const allLeapYear = []
    for(min; min <= max; min++){
        let newYear = leapYear(min);
        if(newYear == true){
            allLeapYear.push(min)
        }
    }
    return allLeapYear
}

console.log(arrLeapYear(212, -400))