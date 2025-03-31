/////////////////////////////////////////////OOP/////////////////////////////////////////////
// qurib beruvchi yig;ib beruvchi  olib beruvchi  - constructor ; klasning parametri

// class className {
//   prop1;
//   prop2;
//   constructor(params) {
//     this.prop1 = params.prop1;
//     this.prop2 = params.prop2;
//   }
//   about() {
//     return this.prop1;
//   }

//   get prop() {
//     return this.prop2;
//   }
//   set prop(newValue) {
//     this.prop2 = newValue;
//   }
// }

//namuna:
// class Boxer {
//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }
//   // metodlari :
//   info() {
//     console.log(
//       `ismi: ${this.name} , yoshi: ${this.age} , kg: ${this.weight} `
//     );
//   }
//   //getter setterlari bolsa : property sifatida murojat  ozgartirish qosha olish hususiyati

//   get yoshi() {
//     return this.age;
//   }
//   set yoshi(newAge) {
//     return (this.age = newAge);
//   }
// }
// // obyekt yaratganimizda :
// const tayson = new Boxer("Tayson", 60, 100);
// console.log(tayson);

// console.log(typeof tayson); // object
// console.log(typeof Boxer); // function chiqaradi klasni
// // metod korish :
// tayson.info();

// // getter setterlardan foydalanish da uning qiyMAtini ozgartirish boladi
// tayson.yoshi = 61;
// tayson.info();

//////////////////////////////////////////////////////////////////////////////////////////////////////

// class Anima {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.color = params.color;
//   }
//   voice() {
//     console.log("Animal voice");
//   }
// }

// // voris olish : extends orqali va ichida super olib voris olgan  ozining paramlari uzatiladi

// class Mushuksimon extends Anima {
//   constructor(params) {
//     super(params);
//     this.speed = params.speed;
//     this.hasTail = true;
//   }
//   voice() {
//     console.log("Cats voice");
//   }
// }
// //super params ning ichidan faqat hohlaganimizni olib uni ozgaruvchigan tenglab super ning ichiga ularni qosyish mumkin

// // bu yerda voice 2- yozilishi polimorfizm deyiladi otasining metod bn bir hil yozish
// //////////////////////////////////////////////////////////////////////////////////////////////////
// // bu yerda voris bolib o'tdi : va yangi qoshildi :

// const pishak = new Mushuksimon({
//   name: "Mallavoy",
//   age: 2,
//   color: "sariq",
//   speed: 100,
// });
// console.log(pishak);

// pishak.voice();

// /////////////////// vorisdan voris olish ////////////////////

// // class Arslon extends Mushuksimon {
// //   constructor(params) {
// //     super(params);
// //     this.isJumper = params.isJumper;
// //   }
// //   voice() {
// //     console.log("Arsloon");
// //   }
// // }

// // //obyekt yaratish kk
// // const arsloncha = new Arslon({
// //   name: "Arslon",
// //   age: 10,
// //   color: "qora",
// //   speed: 90,
// //   isJumper: true,
// // });

// // console.log(arsloncha); // endi chiqadi

// /////////////////////////////////////////////////////////////////////////////////////
// //misol:

// // java script da clas yordamida voris olib bir biriga stil berish hozir css ochilgan html da esa div bn clas nomi yozilgan

// // document vebsayt olish da yordam beradi
// // console.log(document);
// // const box1 = document.getElementById("box1");
// // box1.style.background = "red"; // bor shakl rangi ozgaradi
// // box1.style.height = "100px"; // ichini ozgartirish
// // box1.style.width = "100px";

// class MyComponent {
//   constructor(params) {
//     // hozir pasda nuqtadan keyin yana yozilsa berilganni tanlab olish imkonini beradi
//     this.element = document.querySelector(params.selector); //quertSElector korsatgan malumotimiz boyicha tanlab olish imkoniyati beriladi
//   }

//   show() {
//     this.element.style.display = "block";
//   }

//   hide() {
//     this.element.style.display = "none";
//   }
// }

// // stil berish un voris oamiz

// class Box extends MyComponent {
//   constructor(params) {
//     super(params);
//     this.element.style.background = params.color;
//     this.element.style.height = params.height;
//     this.element.style.width = params.width;
//   }
// }

// // natijada stil beradigan class bor

// // obyekt yaratib stil berib koraamiz
// // divdagilar boyicha har bittasiga yozib ch
// const box1 = new Box({
//   selector: "#box1",
//   width: "20px",
//   height: "300px",
//   color: "black",
// });

// const box2 = new Box({
//   selector: "#box2",
//   width: "100px",
//   height: "100px",
//   color: "red",
// });

// const box3 = new Box({
//   selector: "#box3",
//   width: "100px",
//   height: "100px",
//   color: "red",
// });
// // ochirish bn chiqarish :
// box2.hide();
// box2.show();

// class MainBox extends MyComponent {
//   constructor(params) {
//     super(params);
//   }
//   row() {
//     this.element.style.display = "flex";
//   }
//   column() {
//     this.element.style.display = "block";
//   }
// }

// const mainbox = new MainBox({ selector: "#main" }); // obyekt yaratib undan f.
// mainbox.row();

// //////////////////////////////// misol /////////////////////////////
// // yoniga barchasini yozib tirmaslik un box dan voris olib ozgartirish

// class Circle extends Box {
//   constructor(params) {
//     super(params);
//     // this.element.style.background = params.color;
//     // this.element.style.height = params.height;
//     // this.element.style.width = params.width; berish shartmas chinki voris olinmoqda
//     this.element.style.borderRadius = "50%";
//   }
// }

// const Circle1 = new Circle({
//   selector: "#circle1",
//   width: "200px",
//   height: "200px",
//   color: "purple",
// });

/////////////////////////////////////////////////////////////////////////////////////

// encapsulation - public private ...
// pub hususiyatlar-clas ichdagi  bevosita obyekt yoki ...  tashqaridan turib ozgartirish mumkin boladi
// private -
// class Workers {
//   name; // public : hamma joydan murojat qilish mumkin
//   _birthDate; // protected
//   #salary; // private
// //  static prdCount = 0 ;
//   constructor(params) {
//     this.name = params.name;
//     this._birthDate = params._birthDate;
//     this.#salary = params.salary;
//   }
// }
// workers.constructor

// const worker1 = new Workers({
//   name: "Botir",
//   _birthDate: new Date("2000-01-15").toDateString(),
//   salary: 1000,
// });
// //clg + enter :
// console.log(worker1);
// worker1.name = "Botirjon";
// // worker1.salary xato

// worket._birthDate = new Date(...)  protected ni ozgartirish mumkin emas lekin py va ja da dssturch lar ihtiyoriga qoldirilgan

// prot ni korsatish un obyekt yaratib meros olib constructorda params berib super ga this.subject = params.subj....

// class Staff extends Workers {
//   constructor(params) {
//     super(params);
//     this.subject = params.subject;
//   }
//   set birthDay(newBirthDay) {
//     this._birthDate = newBirthDay;
//   }
//   get birthDay() {
//     return this._birthDay;
//   }
// }

// const ustoz1 = new Staff({
//   name: "Qodir",
//   birthDay: new Date("1222-12-23").toDateString(),
//   subject: "math",
//   salary: 123456,
// });

// ustoz1.birthDay = new Date("2001-02-16");
// console.log(ustoz1);

/////////////////////////////////////////////////////////////////////////////////////////masalalar////////////////////////////////////////////////////////////////

// class Point {
//   constructor(x1, x2, y1, y2) {
//     this.x1 = x1;
//     this.x2 = x2;
//     this.y1 = y1;
//     this.y2 = y2;
//   }

//   distance() {
//     console.log(Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2));
//   }
// }

// const first = new Point(5, 5, 9, 8);

// first.distance();

/////////////////////////////////////////////////////
//16:00

// class BankAccaunt {
//   constructor(balance) {
//     this.balance = balance;
//   }
//   deposit(amount) {
//     console.log(this.prop1 + amount);
//   }

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log("No enough founds");
//     } else {
//       console.log((this.prop1 -= amount));
//     }
//   }
//   checkbalance() {
//     console.log(this.balance);
//   }
// }

// const bank = new BankAccaunt(12000);
// bank.checkbalance();

// bank.withdraw(11000);

// bank.checkbalance();

/////////////////////////////////////////////////
