// const sonlar = [1, 2, 3, 9, 5];

// // iterator har bir, ichini aylantirib olish :

// sonlar[Symbol.iterator];
// for (const element of sonlar) {
//   console.log(element);
// }

// const range = {
//   from: 1,
//   to: 6,
// };
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return {
//           done: false,
//           value: this.current++,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };

// for (const element of range) {
//   console.log(element);
// }

///////////////////////////////////////////////////////// MAP //////////////////////////////////////////////
// 1-bo'sh ; 2- iterable ; 3- another map ; 4 -  ...

// const myMap = new Map();

// console.log(myMap);
// console.log(typeof myMap); //type

// //set orqali yangi qiymat qoshiladi
// myMap.set(1, "bir son");
// myMap.set("1", "bir son");
// console.log(myMap);
// myMap.set(true, false);
// console.log(myMap);

// const student = {
//   name: "Karim",
// };
// myMap.set(student, "talaba");

// console.log(myMap);
// console.log(myMap[1]); // indeks boyicha ololmaymiz
// console.log(myMap.get(student)); // value sini chiqarib beradi aniq aniq berilishi zarur
// console.log(myMap.get(1));
// myMap.set(2, "Ikki").set(3, "uch"); // qoshish
// console.log(myMap);
// console.log(myMap.size); // nechta element borligini korish

// myMap.delete("1"); // chiqarib tashlash
// console.log(myMap);

// // borligini tekshirish :
// console.log(myMap.has(student));
// console.log(myMap.has(10)); // sizeini tekshirish

/////////////////////////////////////////////////////
//tsiklda
// const student = {
//   name: "Karim",
// };
// const myMap = new Map();
// myMap.set(1, "bir son");
// myMap.set("1", "bir son");
// myMap.set(true, false);
// myMap.set(student, "talaba");

// for (const key of myMap.keys()) {
//   console.log(key);
// }

// for (const value of myMap.values()) {
//   console.log(value);
// }

// for (const [key, value] of myMap.entries()) {
//   console.log(key, value);
// }

// for (const [key, value] of myMap) {
//   if (typeof key == "object") {
//     console.log(key, value);
//     console.log(key.name);
//   }
// }

///////////////////////////////////////////////////////

// const student = {
//   name: "Karim",
// };
// const myMap = new Map();
// myMap.set(1, "bir son");
// myMap.set("1", "bir son");
// myMap.set(true, false);
// myMap.set(student, "talaba");

// // const myMap1 = myMap;
// // myMap.delete(student);  xato nusxa olish
// // console.log(myMap);

// const myMap1 = new Map(myMap); // nusxa olish
// myMap1.delete(student);
// console.log(myMap1);
// console.log(myMap1);

// const myMap2 = new Map([...myMap]); // nusxa olish
// console.log(myMap2);

// const myMap3 = new Map([
//   // 2o'lchovli array korinishida map ochish
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
//   [false, "yolg'on"],
// ]);

// console.log(myMap3);

// // ikkalasini qoshish :
// const mergedMap = new Map([...myMap, ...myMap3]); // 2ta mapni birbirini ustiga yozib yuboradi

// mergedMap.clear(); // ichini tozalash
// console.log(mergedMap);

///////////////////////////////////////////////////////////// for each bn chiqarish :
// mergedMap.forEach((value, key, map1) => {
//   console.log(key, value);
// });

//////////////////////////////////////////////////////

const unlilar = "aouie";
const mapText = new Map();
const text = "Assalomu alaykum";

for (const element of text) {
  if (unlilar.includes(element)) {
    mapText.has(element)
      ? mapText.set(element, mapText.get(element) + 1)
      : mapText.set(element, 1);
  }
}
console.log(mapText);

// //////////////////////////////////////////////////////

// const MapR = new Map();

// function addStudent(name, rating) {
//   if (0 < rating < 100) {
//     MapR.set(name, rating);
//   } else {
//     return "siz noto'g'ri reyting kiritdingiz!";
//   }
//   return MapR;
// }

// function getStudent(name) {
//   return MapR.get(name);
// }

// function removeStudent(name) {
//   return MapR.delete(name);
// }

// console.log(addStudent("Bilol", 1));
// console.log(addStudent("Solih", 2));
// console.log(addStudent("Xasan", 3));

// console.log(getStudent("Bilol"));

// console.log(removeStudent("Solih"));
// console.log(MapR);

// //////////////////////////////////////////////////

// function getTopStudent() {
//   let str = [];
//   MapR.forEach((value) => {
//     str.push(value);
//   });
//   console.log(str);
// }

// getTopStudent();

// qaysi biri shunga teng bolsa uni tenglab qoyish shunga

/////////////////////////////////////////////////

// const mySet = new Set();

// mySet.add(2);
// mySet.add(5);
// mySet.add(7);
// mySet.add(8).add(3);

// console.log(mySet);
// console.log(mySet.has("student"));
// // set nomi va '. ' dan keyin barcha metodlari yozilgan boladi :
// mySet.delete(5);
// console.log(mySet);

// const mySet2 = new Set([1, 2, 3, 4, true, [2, 4], { 1: "asd" }]);
// console.log(mySet2);

// for (const [key, value] of mySet2.entries()) {
//   console.log(key, value);
// }

// for (const value of mySet2.values()) {
//   console.log(value);
// }

// mySet2.forEach((value, key) => {
//   console.log(value);
// });

// ///////////////////////////////////////////////////////////////////
// // union 2ta set ni birlashtirish :
// // intersection ikkalasida borini chiqarish :
// // simm diff ikkalasida yog'ini chiqarish :
// // a da bor b da yoq = difference :
// // ichida borligini tekshirish :

// const A = new Set([1, 2, 3, 6, 5]);
// const B = new Set([7, 6, 8, 9, 4]);

// // 1
// function Union(set1, set2) {
//   const birmassiv = [];

//   for (const element of set1) {
//     birmassiv.push(element);
//   }
//   for (const element of set2) {
//     birmassiv.push(element);
//   }
//   return birmassiv;
// }
// console.log(Union(A, B));

// // 2

// // function Intersection(set1, set2) {

// // }
// // console.log(Intersection(A, B));

// const myWeekMap = new WeakMap();
// const student = {
//   name: "Karim",
// };
// myWeekMap.set(student, "talaba");
// // myWeakMap.set(1,"talaba");
// myWeekMap.set(window, "global");

// console.log(myWeekMap);

// const myWeekSet = new WeakSet();
// myWeekSet.add(student);
// console.log(myWeekMap);

// ////////////////////////////////////////////////

// // task1
// const systemMap = new Map();

// const login = prompt("login kiriting: ");
// const parol = prompt("parol kiriting: ");

// function register(login, parol) {
//   if (systemMap.has(login)) {
//     console.log("xatolik yuz berdi qayta urinib koring:");
//   } else {
//     systemMap.set(login, parol);
//   }
// }

// register(login, parol);
// console.log(systemMap);

// //task2

// function login2(login, parol) {
//   if (systemMap[login] !== parol) {
//     console.log("xatolik yuz berdi qayta urinib koring:");
//   } else if (!systemMap.has(login)) {
//     systemMap.set(login, parol);
//   }
// }

// login2(login, parol);
// console.log(systemMap);

//task3

// function rejister(login, parol) {
//   if (systemMap.has(login)) {
//     return "User already exists";
//   } else {
//     systemMap.set(login, { parol, isActive: true });
//   }
// }

// function login2(login, parol) {
//   if (systemMap.has(login) && systemMap[login] == parol) {
//     return "User already exists";
//   } else if (systemMap[login] !== parol) {
//     return "password is incorrect";
//   } else {
//     return "user not found";
//   }
// }

// function logout() {
//   if (!systemMap.has(login)) {
//     return "username exist";
//   }
//   let user = systemMap.get(login);
//   if (user[parol] != parol) {
//     return "username or pawwort xato";
//   }
//   if (user["isActive"]) {
//     return "profildan bir vaqtda faqat 1 kishi kk mumkin";
//   }
// }

// function logoutt(login){
//     if (!systemMap.has(login)){
//         return "User uthoutharized"
//     }
//     let user = systemMap.get(login)
//     systemMap.set(login{})
// }

//bitta bolmasa bold
// console.table([{ Username: "Humoyun", password: "123456", Logeded: "3" }]);
