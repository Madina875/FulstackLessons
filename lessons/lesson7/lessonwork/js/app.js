// arrayning 2ta usuli :
// const arr1 = [];
// const arr2 = new Array(10); // qavs ichiga nechta joy egallashi ni yozish

// console.log(arr1);
// console.log(typeof arr2);
//////////////////////////////////////////////////////////////
// const mevalar = ["olma", "Anor", "Uzum"];
// console.log(mevalar);
// console.log(mevalar.length);
// console.log(mevalar[1]); // indeks boyicha chiqarish
// mevalar[1] = "Behi"; // tavsiya etilmaydi
// console.log(mevalar);
// mevalar[10] = "Shaftoli"; // bosh joyni korsatadi
// console.log(mevalar);
/////////////////////////////////////////////////////////////////
// const mevalar = ["olma", "Banan", "Anor", "Uzum"];

// mevalar.push("Behi", "Shaftoli"); // ohiriga qoshadi
// console.log(mevalar);

// const meva = mevalar.pop(); // ohirgisini sug'urib oladi
// console.log(meva);

// mevalar.unshift("Banan"); // eng boshiga qoshib beradi
// console.log(mevalar);

// const meva1 = mevalar.shift(); // boshidagini sugurib oladi
// console.log(meva1);
////////////////////////////////////////////////////////////////

// const mevalar = ["olma", "Anor", "Uzum"];
// console.log(mevalar[-1]); // yog'iga murojat qilib undefined chiqadi
// console.log(mevalar[1]);

// console.log(mevalar.at(1));
// console.log(mevalar.at(-1)); // ogoridagiga muurojat

// const fructi = mevalar; // kopiya
// // console.log(fructi);

// fructi.push("Banan"); // ishlash pinsipi bir hil
// console.log(mevalar);

// mevalar.length = 10;
// console.log(mevalar); // joy ajratib qoydi

// mevalar.push("bbb");
// console.log(mevalar); // ohiriga qoshilgan

// mevalar.length = 0 ; // ketti ichidagi narsalar ochib ketadi

/////////////////////////////////////////////////////////////////
// tsiklda aylantirish

// const mevalar = ["olma", "Anor", "Uzum"];

// //
// for (let index = 0; index < mevalar.length; index++) {
//   const element = mevalar[index];
//   console.log(element);
// }

// //

// for (const meva of mevalar) {
//   console.log(meva);
// }

// //

// for (const ind in mevalar) {
//   console.log(mevalar[ind]);
// }

// ///////////////////////////////////////////////////////////////////

// const matrix = [
//   [1, 2, 3, [11, 12]],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix);

// //tekislab berish agar ichma ich joylashGAN BOLSA
// console.log(matrix.flat());
// console.log(matrix.flat().flat());
// console.log(matrix.flat(2));

/////////////////////////////////////////////////////////////////

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

///////////////////////////////////////////////////////////////

// let answer = new Array();
// let ind = 0;
// let son;
// let summa = 0;

// do {
//   son = +prompt(`${++ind} son kiriting:`);
//   if (isNaN(son)) {
//     break;
//   }
//   answer.push(son);
//   summa += son;
// } while (true);

// console.log(answer);

// console.log(summa);

////////////////////////////////////////////////////////////
//tepadagi hamma metodlarni bitta splice da qilish mumkin

// const mevalar = ["olma", "Anor", "Uzum", "nok", "tarvuz"];

// const frukti = mevalar.splice(1);
// console.log(frukti);
// console.log(mevalar); // 2ta kesib oladi
// const frukti1 = mevalar.splice(1); // ohirigacha kesib oladi
// const frukti2 = mevalar.splice(1, 2, "olma"); // jami dan birinchisini kesib olib shundan ohirigacha chiqarish
// // 1dagini  2 dan boshlab  ozgartiradi 2ni orniga 0 yoilsa shu indeksga  keyingi sonni yoki str qoshib  beradi
// const frukti3 = mevalar.splice(0); // hammasini kesib oladi
// console.log(frukti);
// console.log(frukti);
// console.log(mevalar);
// console.log(frukti2);
// console.log(frukti3);

// const frukti = mevalar.slice(); // nusxa olish
// const frukti2 = mevalar.slice(1, -2); // oraliqdan nusxa olish

// // console.log(frukti);
// console.log(frukti2);
///////////////////////////////////

// const mevalar = ["olma", "Anor", "Uzum", "nok", "tarvuz"];

// const fruts = ["Banan", "ananas", "lemon"];

// const frukts = mevalar.concat(fruts); // qoshib beradi
// console.log(frukts);

// console.log(mevalar.concat("tut")); // qoshish

///////////////////////////////////////////////////////////////////////

// iterator  arrayni aylantirib beruvchi metod ga aytiladi :

// const mevalar = ["olma", "Anor", "Uzum", "nok", "tarvuz"];

// function showFruits(meva) {
//   console.log(meva);
// }

// //frukti bitta adresga yonaltirib beradi :
// mevalar.forEach(function (meva, ind, frukti) {
//   console.log(meva); // chiqarish
//   console.log(frukti[ind]); // indeks boyicha chiqarish
// });

// mevalar.forEach(showFruits);

// //huddi shuni ikkinichi usuli
// mevalar.forEach((meva) => {
//   console.log(meva);
// });

////////////////////// mevalarni obyekt korinishda korish

// const mevalar = [
//   { nomi: "olma", narxi: 30000 },
//   { nomi: "nok", narxi: 34000 },
// ];

// mevalar.forEach((meva) => {
//   console.log(meva.nomi, "-", meva.narxi);
// });

// mevalar.forEach((meva) => {
//   if (meva.narxi > 30000) {
//     console.log(meva.nomi, "-", meva.narxi);
//   }
// });

///////////////////////////////////////////////////////////////////

// const carComponents = [
//   { name: "Balon", price: 100, carModel: "Malibu" },
//   { name: "Svecha", price: 15, carModel: "Nexia" },
//   { name: "Svecha", price: 150, carModel: "Spark" },
//   { name: "Svecha", price: 150, carModel: "Nexia" },
//   { name: "Svecha", price: 150, carModel: "Spark" },
// ];

// let summa = 0;

// carComponents.forEach((car) => {
//   if (car.carModel == "Spark") {
//     summa += car.price;
//   }
// });

// console.log(summa);

// ///////////////////////////////////////////////////////////////

// function isOdd(num1) {
//   if (num1 % 2) return true;
//   return false;
// }

// const sonlar = [1, 2, 3, 4, 5, 3, 4, 5];
// console.log(sonlar.find(isOdd)); // birinchi topilgan toq sonni chiqarib beradi funksiya nomi yozilgani un

// const juftsonlar = [2, 4, 6, 8];
// console.log(juftsonlar.find(isOdd)); // birinchi topilgan toq sonni chiqarib beradi funksiya nomi yozilgani un
// console.log(sonlar.findIndex(isOdd)); // is Odd ning indeksini qaytaradi

// // console.log(sonlar.indexOf(3));
// // console.log(sonlar.indexOf(3, 5));
// // console.log(sonlar.lastIndexOf(4));

// // sonarni filtrlash

// console.log(sonlar.filter(isOdd)); // isOdd larni topib array korinishida qaytaradi true ga mos kelganini qaytaradi
// console.log(sonlar.map(isOdd)); // map dan nima qaytsa shuni qaytaradi true false

// function div(num) {
//   if (num % 2) return num;
//   return num / 2;
// }

///   map filter sort ///

// console.log(sonlar.map(div)); // map sonni qaytaradi
// console.log(sonlar.filter(div));

// console.log(sonlar.some(isOdd)); // birortasi bor yoki yoqligini tekshirish un
// const toqlar = [1, 3, 9, 7];
// console.log(toqlar.every(isOdd)); // barchasi true bolsa true qaytaradi agar birortasi false bolib qolsa false qaytaradi

// console.log(sonlar.sort()); // sortlab beradi aski kod boyicha agar str berilsa hozir str berilgan
// console.log(sonlar.sort((a, b) => a - b));

// console.log(sonlar.sort((a, b) => a - b).reverse()); // reverse ning 2- usuli

// console.log(sonlar.reverse()); // str son bolsa ham tog'irlab  beraveradi

// const sonlar = [1, 2, 3, 4, 5, 3, 4, 5];

// console.log(sonlar.toString()); // str
// console.log(sonlar + ""); //str

// console.log(sonlar);

// console.log(sonlar.join());

// // yig'indisini hisoblash

// const total = sonlar.reduce((a, b) => a + b);
// console.log(total);

// // total ning ishlash prinsipi :
// const total = sonlar.reduce((a, b) => {
//   console.log(a, b);
//   return a + b;
// });

///////////////////////
// uning formulasi :  yig'indi hisoblash

// const initialValue = 0;
// const total = sonlar.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue;
// });

// console.log(total);

// Array.isArray(sonlar)

// let text = "salom-mening-do'stim";
// let element = "";
// text = text.split("-");

// for (let i = 0; i < text.length; i++) {
//   text[i] = text[i][0].toUpperCase() + text[i].slice(1);
// }

// a = text.join("");
// console.log(a);

/////////////////////////////////////////////////////////////////////////

// bitta_array = [1, 2, 3, 4, 14, 3, 16, 2];

// let katta_son = bitta_array[0];
// let kichik_son = bitta_array[0];

// for (let index = 0; index < bitta_array.length; index++) {
//   if (bitta_array[index] > katta_son) {
//     katta_son = bitta_array[index];
//   }
// }

// for (let index = 0; index < bitta_array.length; index++) {
//   if (bitta_array[index] < kichik_son) {
//     kichik_son = bitta_array[index];
//   }
// }

// console.log(kichik_son, katta_son);

//////////////////////////////////////////////////////////////////////////
// array ning takrorlangan elementlarini o'chirish

// newArr = [];
// for (const element of bitta_array) {
//   if (!newArr.includes(element)) newArr.push(element);
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////

// ortacha qiymat qaysi bolsa oshani 2ga bolish

/////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5];

// let lensof = [];

// for (const element of arr) {
//   lensof += ` ${element.length} `;
// }

// console.log(lensof);

// let katta_sonn = lensof[0];

// for (let index = 0; index < lensof.length; index++) {
//   if (lensof[index] > katta_sonn) {
//     katta_sonn = lensof[index];
//   }
// }
// console.log(katta_sonn);

// for (const item of arr) {
//   if (item.length == katta_sonn) {
//     console.log(item);
//   }
// }

/////////////////////////////////////////////////////////////
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 4, 2, 7, 9];

// let newArr = arr1.concat(arr2);
// let res = [];

// for (let val of newArr) {
//   if (arr1.includes(val) && arr2.includes(val) && !res.includes(val)) {
//     res.push(val);
//   }
// }

// console.log(res);

// ///////////////////////////////////////////////////////////////

// const massiv1 = [1, 2, 3];
// const massiv2 = [100, 2, 1, 10];
