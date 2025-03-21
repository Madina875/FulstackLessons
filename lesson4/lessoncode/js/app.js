// function printNumber() {
//   console.log(1);
// }
// //return1
// printNumber();
// //return2 console bn

// console.log(printNumber());
// //java will do return  automaticaly | if it'll return by own it'll show undefined in the console


// const prNum = printNumber;
// prNum();
// //return3 if you'll save it to another variable and write beneath it'll do same work


//function decloration looks like :
// function summa(a, b) {
//     // a and b it is param.
//   return a + b;
// }
// console.log(summa(2, 3)); //argument


// // yu can't add argument to function before do it only after calling the function

// // function expression looks like:
// // function called 'check = ' you will equal it to this another function(a){return....}
// const check = function(a){
//     return Number.isInteger(a);
// }
// console.log(check(7));

//function expression and function decloration findout
//using 'this' in the console

// function checkNumber(num) {
//   if (num % 2 == 1) {
//     toq(); // here
//   } else {
//     console.log("juft son");
//   }
// }
// checkNumber(7);
// checkNumber(8);

// //to wrote separetly: calling what is in the bottom of my codde to the upper part where is the function

// function toq(){
//     console.log("toq son");
// }

//calback funksiya :
// funcga boshqa bir func parametr sifatida uzatish

// function checkNumber(num, odd) {
//   if (num % 2 == 1) {
//     odd(); // look
//   } else {
//     console.log("juft son");
//   }
// }
// checkNumber(7, toq); //the param which is the function
// checkNumber(8);

// function toq() {
//   console.log("toq son");
// }

// //anonym or 'nomsiz' to write the func to param:
// function checkNumber(num, odd) {
//   if (num % 2 == 1) {
//     odd(); // look
//   } else {
//     console.log("juft son");
//   }
// }

// checkNumber(
//   7,
//   function toq() {
//     console.log("toq son");
//   },
//   function juft() {
//     console.log("juft son");
//   }
// );

// checkNumber(8);

// //arrow function:
// const summa = (a, b) => {
//   return a + b;
// };
// console.log(summa(3, 4));

// //writing without :
// const summa2 = (a, b) => a + b;
// console.log(summa2(2, 3));

// //writing 'a' without braces
// const printNumber = (a) => {
//   console.log(a);
// };
// console.log(printNumber(3));

// //with str:
// const salomlash = () => console.log("salom");
// salomlash();

// //void func :
// const age = prompt("how old?");
// //writing arrow func in one line
// const welcome = age < 18 ? () => console.log("hi") : () => console.log("hello");
// welcome();

//calback and arrow:
//confirm metod like promt but it will use only bool

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// ask(
//   "2+2=5?",
//   () => console.log("javob noto'g'ri"),
//   () => console.log("javob notog'ri")
// );

// ask(
//   "royhatdan otdingizmi?",
//   () => console.log("marhamat kiring"),
//   () => console.log("avval royhatdan oting")
// );

//recursiv function not useful: (funksiyadan chiqish sharti bolishi kk)

// function summa(n) {
//   if (n == 1) return 1;
//   return n + summa(n - 1);
// }
// console.log(summa(5));

//in factorial you shuould just change the symbol '+'
//writing with arrow:

// const summaArrow = (n) => (n == 1 ? 1 : n + summaArrow(n - 1));
// console.log(summaArrow(5));

//summa(5)
// 5+summa(4)

//summa(4)
// 5+summa(3)

//summa(3)
// 5+summa(2)

//summa(2)
// 5+summa(1)

//summa(1)
// return 1

// //fibonacci:
// function fibo(n) {
//   if (n <= 1) return n;
//   return fibo(n - 1) + fibo(n - 2);
// }
// console.log(fibo(10));

// //factorial :

// function fibo(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n <= 1) return n;
//   memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
//   return memo[n];
// }
// console.log(fibo(1000));

//closure - tutashish:
// let count = 7;

// function makeCounter() {
//   let count = 0;
//   return function () {
//     let count = 3;
//     return count++;
//   };
// }

// ichida bolmasa undan oldingisini izlaydi
// function makeCounter() {
//   let count = 0;
//   return function () {
//     // let count = 3;
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(count);
// let counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// function degree(daraja){
//     return function (asos){//asos tepadagi dan olyabdi
//         return asos**daraja;//kvadrati
//     };
// }
// //3**4 3-asos,4-daraja

// const kvadrat = degree(2);
// const kub = degree(3);
// console.log(kvadrat(5));
// console.log(kub(10));

// function salomlash() {
//   console.log("salom");
// }

// //3000 milesekund
// setTimeout(salomlash, 3000);

// function salomlash() {
//   console.log("salom");
// }

// console.log(1);
// setTimeout(salomlash, 0);
// console.log(2);

//outputting by selected time:
// function salomlash(name, age) {
//   console.log("salom", name, age);
// }
// setTimeout(salomlash, 1000, "Botir", 22);
// setTimeout(salomlash, 2000, "Botir2", 23);
// setTimeout(salomlash, 3000, "Botir3", 24);

// // korsatgandan keyin doimiy ravishda chiqarib turadi
// function salomlash(name, age) {
//   console.log("salom", name, age);
// }
// setInterval(salomlash, 1000, "Botir", 22, 1);

// qayta qayta chiqarishni toxtatish

// const timerID = setInterval(salomlash,1000,"Botir",1);
// function salomlash(name, age) {
//   console.log("salom", name, age);
//   clearInterval(timerID)
// }

//limit berish:

// const timerID = setInterval(salomlash, 1000, "Botir", 1);
// let count = 0;
// function salomlash(name, age) {
//   console.log("salom", name, age);
//   count++;
//   if (count == 5) clearInterval(timerID);
// }

//globalda turuvchi java da yozib qoyilgan metodlarni korish:
// console.log(this);

//2-usuli (ham nodejs da ham brauzer da ishlashi un):
// console.log(globalThis);

//cary

//task1

// const summaArrow = (n) => (n == 1 ? 1 : n + summaArrow(n - 1));
// console.log(summaArrow(5));

// function summa(n) {
//   if (n == 1) return 1;
//   return n + summa(n - 1);
// }
// console.log(summa(5));

// task2

// let rev = +prompt("sonni kiriting:");

// function summa(num, sum) {
//   if (num == 0) return sum;
//   sum = sum * 10 * (num % 10);
//   return summa(parseInt(num / 10), sum);
// }

// console.log(summa(rev, 0));
// alert(`siz kiritgan son teskarisi:${summa(rev, 0)}`);




//task3

// let a = +prompt("sonni kiriting:");
// let b = +prompt("sonni kiriting:");

function summa(a, b) {
  if (a == 0 || b == 0) return 0;
  sum = summa(a) * summa(b);
  return sum;
}

console.log(2, 4);

// const summaArrow = (n) => (n == 1 ? 1 : n * summaArrow(n - 1));
// console.log(summaArrow(5));
