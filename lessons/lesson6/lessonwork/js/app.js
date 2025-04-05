////////////////////////////////////////////////////////////////////
// //function konstructor : agar kalit va obyekt bir hil bolsa bittasini yozish kifoya
// function addPhone(brand, model, price) {
//   return {
//     brand,
//     model,
//     price,
//   };
// }
// const phone1 = addPhone("ioPhone", "16 pro max", 1000);
// console.log(phone1);

///////////////////////////////////////////////////////////////////
// const user = {
//   fname: "Farhod",
//   lname: "Nishonov",
// };

//voris olish 'proto' deb nomlanuvchi hususiyat orqali
//o'zining narsalarini chiqarib pasda voris egasiniki chiqib turadi

// const superAdmin = {
//   __proto__: user,
//   isAdmin: true,
//   login: "superadmin",
//   password: "12345",
// };
// console.log(superAdmin);
// //greyu konditsoner
///////////////////////////////////////////////////////////////
//property larini korish :

// for (const prop in superAdmin) {
//   if (superAdmin.hasOwnProperty(prop)) {
//     console.log("Own property:", prop);
//   } else {
//     console.log("Proto property:", prop);
//   }
// }

/////////////////////////////////////////////////////
// //voris olishning zamonaviy usuli :

// const user = {
//   fname: "Farhod",
//   lname: "Nishonov",
// };

// const admin = Object.create(user, {
//   isAdmin: {
//     value: true,
//     enumerable: true, //enumerable yoqib qoyilsa tashqarida korish mumkin boladi
//     writable: true, // writable yoqib qoyilsa tashqaridan ozgartirish mumkin boladi
//     configurable: true, // tashqaridan o'chirish mumkin funksiyasi yoqib qoyildi
//   },
//   login: {
//     value: "admin",
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   },
//   password: {
//     value: "qwert",
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   },
//   _salary: {
//     //protected object
//     value: 2000,
//     writable: true,
//   },
//   //getter setterlar yozish:
//   salary: {
//     get() {
//       return this._salary;
//     },
//     set(newSalary) {
//       this._salary = newSalary;
//     },
//   },
// });
// console.log(admin);

//////////////////////////////////////////////////////
// //zamonaviy usulning hususiyatlari:

// for (const prop in admin) {
//   if (admin.hasOwnProperty(prop)) {
//     console.log("Own property:", prop);
//   } else {
//     console.log("Proto property:", prop);
//   }
// }

///////////////////////////////////////////////////
// // hususiyatini o'zgartirish :

// admin.isAdmin = false;
// console.log(admin.isAdmin);

// // o'chirib korish

// delete admin.password;
// console.log(admin.password);

// //

// console.log(admin.salary);

// admin.salary = 22000;
// console.log(admin.salary);

//////////////////////////////////////////////////////

// //katta obyektga qoshib qoyish:

// Object.prototype.PI = 3.14;

// Object.prototype.salomlash = function () {
//   return "salom";
// };

// const test = {
//   name: "hisobla",
// };
// console.log(test.PI);
// console.log(test.salomlash());

////////////////////////////////////////////////////////

// const str1 = "Najot Ta'lim";
// console.log(str1);

// console.log(str1[1]); //kk harfni chiqarish
// str1[1] = "o"; // ozgartirib bolmaydi
// console.log(str1.length); // uzunligini topish
// console.log(str1[str1.length - 1]); // harfni olish
// console.log(str1.charAt(1)); // harfni olish 2- usuli
// console.log(str1.charCodeAt(1)); // aski dagi kodini qaytaradi lenin -1 berilsa NaN
// console.log(str1.codePointAt(1)); // aski dagi kodini qaytaradi lenin -1 berilsa undefined qaytariadi
// console.log("Salom" > "salom"); // aski da solishtiradi salom ning askisi katta
// console.log("Salom" == "Salom"); // true

//////////////////////////////////////////////////////
// //tsiklda aylanish:

// //har bir harfini chiqarib berish:

// const str1 = "Najot Ta'lim";
// for (let index = 0; index < str1.length; index++) {
//   console.log(str1[index]);
// }

// //2 - usuli:
// //har bitta belgini ishlash imkonini beradi :

// for (const ch of str1) {
//   console.log(ch);
// }

// //3-usuli :
// //indeksni olib beradi:

// for (const i in str1) {
//   console.log(i);
//   //   console.log(str1[i]);
// }

///////////////////////////////////////////////////////

// const str1 = " Najot Ta'lim ";
// console.log(str1.trim()); // boshi ohiri dagi space larni olib tashlaydi
// console.log(str1.trimEnd());
// console.log(str1.trimStart());

// console.log(str1.trim().toLowerCase()); //trim bn  ' . ' qoyib matnni o'zgartirish
// console.log(str1.trim().toLowerCase().split("").join(",")); // join yozish

// const strArr = str1.split("");
// console.log(strArr); // hammasini arr ga olib ketadi

// const strArr2 = str1.trim().split("");
// console.log(strArr2);

// console.log(strArr.join(""));

////////////////////////////////////////////////////////////

// const str1 = "Najot Ta'lim";
// const str2 = str1.slice(); //nusxa olish
// console.log(str2);
// console.log(str1.slice(0, 5)); //kesib olib berish
// console.log(str1.slice(-3)); //lim olib beradi

// console.log(str1.substring(0, 5)); // kesib olib berish lekin agar 5 ,0 deb berilsa javob ozgarmaydi
// console.log(str1.substring(-3)); // olib bermaydi

///////////////////////////////////////////////////////////

const news = "nimadir";
// console.log(news.startsWith("Yana"));
// console.log(news.startsWith("Yana"), 11);
// console.log(news.endsWith("kerak?"));
// console.log(news.includes("mundal", 38));
// console.log(news.indexOf("mundal"));
// console.log(news.replace("mundal", "something"));
// console.log(news.match("mundal"));
// console.log("a".length);
// console.log("😊".length);
// console.log(news.search(/nimadir/));
// console.log(news.search(/nimadir/i)); // orasida kattasi yoki huddi shu harfni kichifgi bolsa hisobga olmasdan topib beadi
// console.log(news.concat(".", "!")); // qoshish

//////////////////////////////////////////////////////////////////

// const str1 = "5";
// console.log(str1.padStart(10, 0)); // oldini 0 bn toldirib berdi

/////////////////////////////////////////////////////////////////
// tasks//

// const username = "noDir";
// function capitalize(username) {
//   return username[0].toUpperCase() + username.slice(1).toLowerCase();
// }
// console.log(capitalize(username));

//////////////////////////////////2

// sstr = "$121";
// console.log(sstr.slice(1));
// //yoki :
// let answer = "";
// for (let index = 0; index < sstr.length; index++) {
//   if (sstr[index] == Number(sstr[index])) {
//     const element = sstr[index];
//     answer += element;
//   }
// }
// console.log(answer);

//////////////////////////////

sstr2 = "mom";
// //
// console.log(sstr2.startsWith(sstr2[-1]));
//
sstr2in = "";

length_of_it = sstr2.length;
for (let index = sstr2.length - 1; index >= 0; index--) {
  const element = sstr2[index];
  sstr2in += element;
}

count = 0;

for (let index = 0; index < sstr2.length; index++) {
  if (sstr2[index] == sstr2in[index]) {
    count++;
  }
}

count == length_of_it
  ? console.log("this is palindrome")
  : console.log("it is not palindrome");

/////////////////////////////////////////////////////////

tekst = "hi this is world Java";

const strArr2 = tekst.trim().split(" ");
console.log(strArr2);

highestnum = 1;

for (i in strArr2) {
  strArr2[i].length > highestnum ? (highestnum = strArr2[i].length) : undefined;
}
console.log(highestnum);

for (let index = 0; index < strArr2.length; index++) {
  if (strArr2[index].length == highestnum) {
    console.log(strArr2[index]);
  }
}

//////////////////////////////////////////////////////////

strr = "aasdfgh";
let unlilar = "aiuo";
let answerr = "";
console.log(strr.includes("a"));

for (i in strr) {
  if (strr[i].includes("a")) {
    answerr += strr[i];
  } else if (strr[i].includes("e")) {
    answerr += strr[i];
  } else if (strr[i].includes("u")) {
    answerr += strr[i];
  } else if (strr[i].includes("i")) {
    answerr += strr[i];
  }
}
//clg
console.log(answerr);

////////////////////////////////////////////////////////////

text = "asdfghjkzxcvbnmasdfghj";

// for (i in text){
//   if (text[i])
// }

aaa = "111234567890";

/////////////////////////////////////////////////////////////
let a = 4;
let b = 5;
[a, b] = [b, a];
console.log(a);
console.log(b);

/////////////////////////////////////////

let result = "";
for (let i = 0; i < text.length; i++) {
  if (!result.includes(text[i] || text[i] == " ")) result += text[i];
}
console.log(result);

numbers = [12, 34, 556, 23, 1456];
let sum = 0;

for (i in numbers) {
  console.log((numbers[i] = numbers[i]));
}
