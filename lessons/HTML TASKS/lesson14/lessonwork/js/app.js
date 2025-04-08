// function hello() {
//   console.log("object", this);
// }
// hello();

// const user = {
//   name: "Nodir",
//   age: 24,
// };

// //obyektga boglash  funk ni user obj ga boglash
// hello.bind(user)();

////////

// const player = {
//   name: "Abbos",
//   age: 22,
//   about() {
//     return `ism:${this.name} yosh:${this.age}`;
//   },
// };

// console.log(player.about());

// const player2 = {
//   name: "elbek",
//   age: 29,
// };

// const eldor = player.about.bind(player2); //here
// console.log(eldor());

// 1chi obyekt metodidan boglab qoyish orqali 2-obyektda foydalanib ketyabmiz
// bind ning call metodi : bind bn player2 ga boglab 2-obj ning aboutini chaqirib olmoqdamiz :
// obyekt kalitlari bir hil bolishi kk
// console.log(player.about.call(player2));

// uzatib yuborish ham mumkin position narsa qoshish kk bolsa yoniga

// const player = {
//   name: "Abbos",
//   age: 22,
//   about(position) {
//     return `ism:${this.name} yosh:${this.age} ampulas:${position}`;
//   },
// };

// console.log(player.about());

// const player2 = {
//   name: "elbek",
//   age: 29,
// };

// const eldor = player.about.bind(player2, "Forward");
// console.log(eldor("Forward"));

// console.log(player.about.call(player2), "Forward");
// console.log(player.about.apply(player2), ["Forward"]); // farqi faqat array orqali berish kk

///////////////////////////

// const API_URL = "https://jsonplaceholder.typicode.com/photos";

// async function loadJsonData(url) {
//   try {
//     const response = await fetch(url, {
//       signal: controller.signal,
//     });
//     const JsonData = await response.json();
//     console.log(JsonData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const controller = new AbortController(); // signal yuborib ishlashini toxtatib tursa boladi
// //jarayonni demonstratsiya:
// setTimeout(() => {
//   controller.abort("Sabrim yetmadi");
// }, 270);
// // agar 100 berilsa error will output toxtab qoladi fetch ga borib
// loadJsonData(API_URL);

//////////////////////////////////////////////////////////////////////
// regilar expression
//regex 101.com test un

// global ni ochirib qoyilsa faqat birinchi [a] a larni topib beradi
// MULTILINE KOP QATORLI HARFLARDA TOPIB BERISH UN

// ELON QILISH: 2 ta  usul
// const regex1 = /najot/gi; // insensitive i yozilsa katta kichik topib beraveradi  gi keyingisini topib beradi
// console.log(regex1.test("Men Najot talimida kelajagim najoti uchun oqiyman ")); // tekst ni kiritib /najot / boyicha flaglar// topib beradi

// // qidirish kk bolgan soz va flaglar :
// const regex2 = new RegExp("najot", "gmi");
// console.log(regex1.test("Men Najot talimida kelajagim najoti uchun oqiyman "));

// //2.Flags - bayroqchalar
// // g - global
// // i - insensitive
// //m - multiline

// const str = `1 Men Najot Ta'timda
// 2 kelajagim najot
// 3 uchun o'qiyman!`;

// console.log(str.match(/najot/gi)); // sozlarni borini arrayga solib chiqarib beradi
// console.log(str.match(/najot/)); // index bn hammasi arrayda tekst ichiga qoshib chiqaradi
// console.log(str.match(/\d/gi)); // hamma sonlarni chiqaradi global berganimiz un
// console.log(str.match(/^\d/gm));
// console.log(str.match(/^\d/g)); // birinchi sonni chiqaradi || son bn boshlanganini chiqaradi

// 3. methods

//str.match

// console.log("Men Najot talimida kelajagim najoti uchun oqiyman".match(/najot/)); // tekshirish usuli

// // str.replace(regex,<nimabn almashtirayotgan tekst beriladi>)
// console.log(
//   "Men Najot talimida kelajagim najoti uchun oqiyman".replace(
//     /najot/,
//     "fulstack"
//   )
// );
// //agar ig berilsa hamma topilgan  sozni ozgartiradi :
// console.log(
//   "Men Najot talimida kelajagim najoti uchun oqiyman".replace(
//     /najot/gi,
//     "fulstack"
//   )
// );

// //

// // regex.test(str) ->boolean // borligini tekshirib bolean qaytaradi

// console.log(/najot/.test("Men Najot talimida kelajagim najoti uchun oqiyman"));

////////

//4.letter classes

// \d - digit = ixtiyoriy raqam
// \D - \d dan farqli teskarisini chiqarib beradi yani harflar yoki ishiralar

// \d\d ketma ket gelayotgan ni topib beradi
// \w - ixtiyoriy lotin  xarf, raqam, _ = topib beradi (probel belgilamaydi )
// lotin pastki chiziq probel ... \w ning teskarisi = \W (katta w)
// \s - space probel , \n
// \S hamm probellarni tashlab ... teskarisi

// . - har qanday belgi  (\n dan farqli , tashqari)

// 5 Anchor - langar

// ^ - satr boshini belgilab beradi
// console.log(/^\d/.test("7 aprel")); // bunda digitdan boshlangan ni tekshiradi

// // $ - sortirovka
// console.log(/^\d$/.test("7 aprel"));

// // \b - butun soz

// console.log(/\bJava\b/.test("Java Script")); // alohida soz bolishini hohlasak
// console.log(/Java/.test("JavaScript")); // alohida soz bolishini hohlasak

///////////////////////////////////////////////////////////////////////////////////////////////

//
// maxsus belgilar :
// [] \ ^ $ () . ? * + /

// const regex1 = /\./;
// const regex2 = /./;

// console.log(regex1.test("a.c"));
// console.log(regex1.test("abc")); // ichida nuqta bolmagani un false chiqaradi

// console.log(regex2.test("abs")); // true boladi

// // dolar borligini tekshirish un
// const regexx2 = /\$/;
// console.log(regexx2.test("Jami summa $100"));

// ohirgi elementini tekshirish kk bolsa /$/ ozini tekshirish kifoya

/////////////////////////////

//7. diapozon va toplam

// [abs] ushbu harflar toplami  // aynan ichidagi harflar bor joylarni belgilab korsatib beradi

// [a-z] barcha harflarni belgilash

// [a-zA-Z0-9_?!]

// [^a-z]  barcha harflarni belgilash ning teskarisi

// [0-9]

/////////////////////////////////////////////

// 8.Kvantlar
//{n} - aniq marta takrorlanish
//{n1,} - kamida n1 marta va undan kop

// const regex = /a{3}/;
// console.log(regex.test("aaaa"));

// //998-90-123-45-67
// console.log(/\d{3}-\d{2}-\d{3}-\d{2}-\d{2}/.test("998-90-123-45-67"));

// console.log(/^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}/.test("00998-90-123-45-67")); // qatiy boshidagi 3raqamni tekshirish

//
// notogri ishlaydi
// const regexx2 = /a{2,4}/;

// console.log(regexx2.test("aa"));
// console.log(regexx2.test("aaa"));
// console.log(regexx2.test("aaaa"));
// console.log(regexx2.test("aaaaa"));

///////////////////////////

// 9. qisqartirilgan lambda
// ? {0,1} - optional
// + {1,} - kamida 1 marta

// console.log(/users?/.test("user"));
// console.log(/users?/.test("users"));

//

// console.log(/ab+c/.test("abc"));
// console.log(/ab+c/.test("abbc"));
// console.log(/ab+c/.test("abbbbc"));
// console.log(/ab+c/.test("abbbbbbbbbbbc"));
// console.log(/ab+c/.test("abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc"));

// //////////

// console.log(/ab*c/.test("ac"));
//////////////////////////

//10. Dangasalik yoki ochkozlik

// console.log(`Bu "salom" yoki "kalom" so'zi`.match(/".+?"/g)); // ichidagini chiqarish aynan belgilanganini
// console.log(`Bu "salom" yoki "kalom" so'zi`.match(/".+"/g)); // ichidagini chiqarish aynan barcha sozlarni "" siz

// //////////

// // guruhlab belgilash

// console.log(/(go){3}/.test("gogo")); // 3 marta bormi deb tekshiradi

// //12 Or - yoki

// console.log(/html|css|js/.test("i love js")); // ichida bor yoki yoqligini tekshiradi (bool)

/////////////////////////////////////////////////////////////////////////

// \d
// [ 0-9]
// [a-zA-Z0-9_?!]
// [.]

////////////////////////////////  probel ni \s bn qoyish ham mumkin



