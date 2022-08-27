/* 
Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения
*/

const degreeTable = [];
const elArr = [];
for(let i = 1; i <= 10;i++){
    degreeTable[i] =[]
    for (let j = 1; j <= 10; j++){
        degreeTable[i][j] = i**j;
    }
}

console.table(degreeTable);

