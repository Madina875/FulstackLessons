//agar auto save yoqilgan bolsa alert qismi har bir ozgarish da sorayveradi
// console.log(parseInt("100"));
// console.log(parseInt("text"));
// console.log(parseInt("30px"));
// console.log(parseInt("3.14"));
// console.log(parseInt("3,14"));
// console.log(parseFloat("3,14"));
// console.log(Number(" 100 "));
// console.log(Number("100px"));
// console.log(Number(true));
// console.log(Number(Infinity));
// console.log(Number(new Date()));
// console.log(Number(new Date("1969-12-31")));
// console.log(Number.isFinite(123));
// console.log(isFinite(123));
// console.log(Number.isFinite("123"));
// console.log(isFinite("123")); //avval songa otkazadi
// console.log(Number.isFinite(12.3));
// console.log(isFinite(12.3));
// console.log(Number.isFinite(true));
// console.log(isFinite(true));
// console.log(Number.isFinite(Infinity));
// console.log(isFinite(Infinity)); // false qaytaradi
// console.log(isInteger(123)); xato chiqaradi
// console.log(Number.isInteger(123));
// console.log(Number.isInteger(12.3));
// // 2ni 53 darajasigacha tekshiradi
// console.log(Number.isSafeInteger(12**2));
// console.log(2**53);
// console.log(Number.isNaN("1"));
// console.log(Number.isNaN("salom"));
// console.log(Number.isNaN(1));
// console.log(isNaN(1));
// console.log(isNaN("1"));
// console.log(isNaN("text"));
//tepadan malumot olish
//ildizdan chiqarish math.sqrt()
// const n1 = prompt("1 -  sonni kiriting:","0");
// const n2 = prompt("2 -  sonni kiriting:", "0");
// const res = Math.sqrt(n1**2 + n2**2);
// //consoleda chiqarish
// console.log(res)

// console.log(true && true);
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);

// console.log(5&& true && true && 7);

//bosh massiv true qaytaradi []
//null false qaytaradi
//undefined false qaytaradi
//0 bersak false qaytaradi
//0dan farqli son bolsa true qaytaradi
//null false qaytaradi
//str da 1ta probel bolsa ham true qaytaradi aski da 32 son

// console.log(Boolean(true));
//mantiqiy kopaytirish
// nan yozilgan joyga nima yozilsa shuni qaytaradi bottom:
// console.log(5 && NaN && true && true && 7 && true);
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);

//mantiqiy qoshish

// console.log(true||true);
// console.log(true || false);
// console.log(false || true);
// //ohiriga yozilgani chiqadi
// console.log(false || false || null || undefined);

//EMAS - INKOR

// console.log(!true); // false
// console.log(!false); //true
// console.log(!0); //true

// let password
// // password ning o'zi undefined
// console.log(password);

// console.log(password || "qwerty");
// console.log(password?? "qwerty") ; // null va undefined ga tekshirib beradi

// const a = 2 ;
// //bitli surish :
// console.log(a >> 1);
// console.log(a << 1);
//& kopaytirish

// const a = 3 ;
// const b = 4 ;

// console.log(a & b); // bitli kopaytirish
// console.log(a | b ); // bitli qo'shish

// terner operatori - ?

// const age = prompt("Yoshingizni kiriting:", 18);

// if ozi age ni numberga otkazadi

// if (age<18){
//     console.log("Maktab o'quvchisi");
// }else if (age>60){
//     console.log("Nafaqaxo'r");
// }else{
//     console.log("Faol ishchi");
// }

// //ternary operatori bn yozish

// age<18
//  ? console.log("maktab o'quvchisi")
//  : age > 60
//  ? console.log("Nafaqaxo'r")
//  : console.log("Faol ishchi");
//switch key o'zi numbeerga otqazmaydi

//case ga shart berib ketish mumkin == bolsa yoki > bolsa yoki 1 huddi pastdagidek:

// let day = +prompt("Hafta kunlarini kiriting:");

// switch (day) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;

//     default:
//         console.log("Notog'ri hafta kuni kiritildi");
//         break;
// }

// let count = 0
// while (count<10){
//     count++;
//     console.log(count);
// }

// while (count>0){
//     console.log(count);
//     count--;
// }

// while (count > 0) {
//   console.log(count);
//   count--;
// }

// let count = 0 ;
// do {
//     count++;
//     console.log(count);

// } while(count<10);

// let son;
// do{
//     son = +prompt("Musbat son kiriting:");
// } while (son<0);
// console.log(son);

// let  login = +prompt("login kiriting:");
// let pasword = +prompt("pasport kiriting");

// do{
//      login = prompt("login kiriting:");
//      pasword = prompt("pasport kiriting");

// }while(login !=="admin" && pasword !== "qwerty");
// console.log("kirdi");

// let count = 0 ;
// for (;;){
//     if (count >= 10 ) break;
//     count++;
//     if (count==5) continue;
//     console.log(count);
// }

// for (let i =0;i<10;i++){
//     for (let j = 0 ; j<10; j++){
//         console.log(i,j);
//     }
// }

// select  'label :' at least of the function and in the code with logic enter maybe ' if (j == 7) break label' ;

// label:for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i, j);
//     if (j==7) continue label;
//   }
// }

//1dan 100 gacha faqat tub sonlarni print

// finding in python

// def son_m_or_m17(son: int):
//     dividers = 0
//     for i in range(1, son, +1):
//         if son % i == 0:
//             dividers += 1
//     if dividers == 2:
//         return 'Tub'
//     else:
//         return 'Musbat'

// let dividers = 0

// for (let i = 1 ; i < 100; i++) {
//    if (100% i == 0){
//     dividers++;
//    }
//    if (dividers==2){
//     console.log();
//    }else{
//     console.log("Musbat");
//    }
// }

//1-task

// let number = +prompt("son kiriting: ");
// let sum = 0;
// while (number!=0){
//     sum+=number%10
//     number = parseInt(number / 10);
// }
// console.log(sum);
// alert (`siz kiritgan sonning summasi ${sum}`);

//task 2

// let son ,
// sum = 0 ;
// count = 0 ;

// do {
//   son = +prompt("sonni kiriting:");
//   count++;
//   sum+=son;
// }while(son !=1);

// alert (`siz kiritgan sonning summasi ${sum}`);

//task3
