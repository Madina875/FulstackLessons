// const user = ["Salimov", "Sardor", 25];
// const userLastName = user[0];
// const userFirstName = user[1];
// const userage = user[2];
// buning oson usuli :

// const [userLastName, userFirstName, userage] = user;
// const [userLastName, , userage] = user; // agar orasidagini tashlab ketish kk bolsa
// console.log(user);

// o'rnini almashtirish :
// let x1 = 5;
// x2 = 7;
// [x1, x2] = [x2, x1];

// console.log(x1, x2);

//  str ni har birini :
// const [a, b, c] = "ABS";
// console.log(b);

// bitta ozgaruvchiga olish un agar kop bolsa '  ... ' bn birorta nom deb yozish ichiga
// const [a, b, c, ...otherChars] = "ABSDEF";
// console.log(otherChars);

// const [n1, n2, n3, ...otherNums] = [1, 2, 3, 4, 5, 6, 7];
// console.log(otherNums);

//ichma ich bolsa huddi shunday pasdan ozgaruvchiga tenglab :

// const user = ["Salimov", "Sardor", 23, ["js", "Py", "C"]];
// const [lname, , , [js, pyton, c]] = user;
// console.log(pyton);
// console.log(user[3][1]);

// obyektlar bn key lari bir hil bolishi kk :
// const user = {
//   ismi: "Sobir",
//   yoshi: 25,
// };

// const { ismi, yoshi } = user;
// const { yoshi, ismi } = user;
// key nomini ozgartirish ALIAS  deb nomlanadi
// const { yoshi, ismi: name } = user;
// console.log(name);
// console.log()

//////////////////////misol namuna:
// const user = {
//   ismi: "Sobir",
//   yoshi: 25,
//   oilasi: {
//     otasi: {
//       ismi: "Nodir",
//       yoshi: 34,
//     },
//     onasi: {
//       ismi: "Gulinur",
//       yoshi: 33,
//     },
//   },
// };

// const {
//   ismi,
//   yoshi,
//   oilasi: {
//     otasi: { ismi: otasiniIsmi, yoshi: otasiniYoshi },
//     onasi: { ismi: onasiningIsmi, yoshi: onasiningyoshi },
//   },
// } = user;

// console.log(otasiniIsmi);

//////////////////////////////////////
// agar yoq bolsa default qiymat berish :

// const colors = {
//     red: "qizil",
//   blue: "ko'k",
//     yellow: "sariq",
//   black: "qora",
// };

// const { yellow = "sap-sariq", red: kizil = "kizildek" } = colors;

// console.log(yellow);
// console.log(kizil);

/////////////////////////////////////////////////////
// kopiya :

// const colors = {
//   red: "qizil",
//   blue: "ko'k",
//   yellow: "sariq",
//   black: "qora",
// };

// const { yellow, ...othersColor } = colors;
// console.log(othersColor);

/////////////////////////////////////////////////////
//matrix da :

// const matrix = [
//   [1, 7, 3],
//   [1, 2, 4],
//   [1, 2, 3],
// ];

// for (const [a, b, c] of matrix) {
//   console.log(a, b, c);
// }

///////////////////////////////////////////////////

// const xodimlar = [
//   { ismi: "Shokir", yoshi: 25, maoshi: 1234567 },
//   { ismi: "ir", yoshi: 25, maoshi: 12345699997 },
//   { ismi: "Shor", yoshi: 25, maoshi: 123456777 },
//   { ismi: "Sir", yoshi: 25, maoshi: 1234565557 },
// ];

// for (const row of xodimlar) {
//   console.log(row);
// }

// for (const { ismi, yoshi, maoshi } of xodimlar) {
//   console.log(ismi);
// }

////////////////////////////////////////////////////////
//date bn ishlash :

// const now = new Date();
// const now1 = new Date(0);
// const now2 = new Date(-24 * 60 * 1000);

// console.log(now);
// console.log(now1);
// console.log(now2);

// console.log(new Date("2025-03-27T22:15")); // vaqt berish
// console.log(new Date(2025, 2, 27, 15, 6)); // huddi shu

/////////////////////////////////////////////////
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());
// console.log(now.valueOf());

/////////////////////////////////////////////

// const now = new Date();
// now.setFullYear(2030);
// now.setMonth(2);
// now.setDate(2);
// console.log(now);

// // . dan keyin set ning metodlari

// console.log(now.toDateString()); // faqat sanasini ajratib beradi
// console.log(now.toTimeString()); // faqat vaqt
// console.log(now.toLocaleString()); // odatiy vaqt korinishi ni chiqarish
// console.log(now.toJSON()); // json korinishida chiqrib berish

////////////////////////////////////////// masala
// const date = new Date();

// switch (date) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   default:
//     console.log("Payshanba");
//     break;
//   case 4:
//     console.log("Juma");
//     break;
// }

// function getWeekDay(date) {
//   return ["Du", "Se", "chor","pay","juma","shan","yak"][date.getDay() - 1];
// }
// console.log(getWeekDay(date));

/////////////////////////////////////////////////////

// const user = {
//   ismi: "Davron",
//   yoshi: 18,
// };
// console.log(user);

// // str korinishiga otkazish :
// const userStr = JSON.stringify(user);
// console.log(userStr);
// // orniga qaytarish : (obyekt)
// const userObj = JSON.parse(userStr);
// console.log(userObj);

// const singer = {
//   ismi: "Alisher",
//   tahallus: "Fayz",
//   yoshi: 40,
//   ustozi: {
//     ism: "Ozod",
//   },
//   unvoni: undefined,
//   shogirdi: null,
//   ashulalari: ["Ota", "Ona"],
//   oilalimi: true,
//   birthDate: new Date("1989-01-01"),
//   about: function () {
//     console.log(this.ismi);
//   },
//   id: Symbol(),
// };

// console.log(singer);

// const singerStr = JSON.stringify(singer);
// console.log(singerStr);

// json fayl ochib ichida bilib olish mumkn nima otgan otmaganini
// hammasini ham otkazib bolmaydi

/////////////////////////////////////////////

// const raqami = {
//   son: 77,
//   // bormi yoki yoqligini tekshiradi :
//   toJson() {
//     return this.son;
//   },
// };

// const adress = {
//   city: "Tashkent",
//   steet: "jOHNSON'S STREET",
//   raqami,
//   toJson() {
//     return {
//       shahar: this.city,
//       "ko'cha": this.adress,
//     };
//   },
// };

// console.log(adress);
// console.log(JSON.stringify(adress));

/////////////////////////////////////////

// const sana = {
//   bugun: new Date(),
//   toJSON() {
//     return {
//       bugun: this.bugun.toDateString(),
//     };
//   },
// };

// const sanaStr = JSON.stringify(sana);
// console.log(sanaStr);
// // const sanaObj = JSON.parse(sanaStr);
// const sanaObj = JSON.parse(sanaStr, function (key, value) {
//   if (key == "bugun") {
//     console.log(value);
//     return new Date(value).getFullYear();
//   }
//   return value;
// });
// console.log(sanaObj);

////////////////////////////////////////////
//error lar rrrrrrrrrrrrrrrrrr :

// const res = 0;
// let son = 0;
// // res = 1 / son;

// // agar vaqt ga sozlab qilmoqcgi bolsa try ni ichida trycatch :
// try {
//   setTimeout(() => {
//     try {
//       res = 1 / son;
//     } catch (error) {
//       console.log("xatolik yuz berdi");
//       console.log(error);
//     }
//   }, 1000); // hatolik yuz berganidan keyin 1 sek dan keyin ishlasin deyish un
// } catch (error) {
//   console.log("xatolik yuz berdi");
//   //   console.log(error.name); // nomini korish
// } finally {
//   // muvafaqiyatli yoki yoq bolsa ham finally boladigan holat
//   console.log("Finaly qismi ");
// }

/////////////////////////////////////////////////////

// let now = new Date();
// const now2 = new Date();
// let startingpoint = now.setFullYear(2000);
// const endingpoint = now2.setFullYear(2050);

// console.log(now.toDateString());

// do {
//   console.log(now.toDateString());
//   now.setFullYear(2000 + 1);
// } while (
//   (now.getFullYear() == 2000 < now.getFullYear() < now.getFullYear()) ==
//   2050
// );

// // function getWeekDay(date) {
// //   return ["Du", "Se", "chor", "pay", "juma", "shan", "yak"][date.getDay() - 1];
// // }
// // console.log(getWeekDay(date));

// // do {} while (now);

//////////////////////////////////////////////////////////////////////////////////////

//date bn ishlash :

// const now = new Date();
// const now1 = new Date(0);
// const now2 = new Date(-24 * 60 * 1000);

// console.log(now);
// console.log(now1);
// console.log(now2);

// console.log(new Date("2025-03-27T22:15")); // vaqt berish
// console.log(new Date(2025, 2, 27, 15, 6)); // huddi shu

/////////////////////////////////////////////////
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());
// console.log(now.valueOf());

/////////////////////////////////////////////

// const now = new Date();
// now.setFullYear(2030);
// now.setMonth(2);
// now.setDate(2);
// console.log(now);

// // . dan keyin set ning metodlari

// console.log(now.toDateString()); // faqat sanasini ajratib beradi
// console.log(now.toTimeString()); // faqat vaqt
// console.log(now.toLocaleString()); // odatiy vaqt korinishi ni chiqarish
// console.log(now.toJSON()); // json korinishida chiqrib berish

// task 1

// const birthdate = new Date(2000, 1, 1);
// const now = new Date(2025, 3, 27);
// console.log(now.getFullYear() - birthdate.getFullYear());

// // task 2

// function prev(day) {
//   let date = new Date();
//   date.setDate(date.getDate() - day);
//   console.log(date);
// }

// prev(101);

// // task3

// function prev2(day) {
//   let date = new Date();
//   date.setDate(date.getDate() + day);
//   console.log(date);
// }

// prev2(101);

// // task4
// const date = new Date(2025, 5, 5);

// function getWeekDay(date) {
//   //   return ["Du", "Se", "chor", "pay", "juma", "shan", "yak"][date.getDay() - 1];
//   return date.getDate();
// }
// console.log(getWeekDay(date));

// //task5

// const firstDate = new Date(2025, 3, 22);
// const firstDate2 = new Date(2025, 3, 27);

// if (firstDate > firstDate2) {
//   firstDate.setDate(firstDate.getDate() - firstDate2.getDate());
//   console.log(firstDate);
// } else {
//   firstDate2.setDate(firstDate2.getDate() - firstDate.getDate());
//   console.log(firstDate2);
// }
