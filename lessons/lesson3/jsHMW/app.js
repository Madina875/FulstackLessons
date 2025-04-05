// number1 = +prompt("birinchi sonni kiriting:");
// number2 = +prompt("ikkinchi sonni kiriting:");

// task1

// let sum = 0;
// for (let i = Number(number1) + 1; i < Number(number2); i++) {
//   sum += i;
// }
// console.log(sum);

//task2

// if (number1 % number2 == 0) {
//   console.log("Bo'linadi");
// } else {
//   console.log("bo'linmaydi");
// }

//task3

// let number1 = +prompt("birinchi sonni kiriting:");
// let number2 = +prompt("ikkinchi sonni kiriting:");
// let objectt = prompt("tanlang: + , -  , * , / ");

// if (objectt == "+") {
//   console.log(number1 + number2);
// } else if (objectt == "-") {
//   console.log(number1 - number2);
// } else if (objectt == "*") {
//   console.log(number1 * number2);
// } else if (objectt == "/") {
//   if (number2 != 0) {
//     console.log(number1 / number2);
//   } else {
//     console.log("Nolga bolish mumkin emas!");
//   }
// } else {
//   console.log("something went wrong");
// }

// task 4

let enteredNumber = +prompt("son kiriting:");
let answer = 1;

for (let i = 1; i <= enteredNumber; i++) {
  answer *= i;
}
console.log(answer);
