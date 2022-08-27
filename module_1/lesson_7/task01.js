/* 
Напишите функцию filter()

функция принимает в параметрах 2 массива

Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
*/

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];
let successStudents = [];

function filter(allStudents, failedStudents) {
  for (let i = 0; i < allStudents.length; i++) {
    if (failedStudents.indexOf(allStudents[i]) == -1) {
      successStudents.push(allStudents[i]);
    }
  }
  return successStudents;
}

console.log(filter(allStudents, failedStudents));
