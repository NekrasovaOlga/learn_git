/*Напишите функцию, вычисляющую наибольший общий делитель двух чисел*/

function nod(a,b){
   if(!b) return a
   if(a > b) return nod(b, a%b)
   return nod(b,a)
}

console.log(nod(18,24)) // -> 6
console.log(nod(188,24)) // -> 4
console.log(nod(0,0)) // -> 0


