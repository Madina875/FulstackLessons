// // // arrayni kengaytirib klass yaratib olish
// // class myArray extends Array {
// //   isEmpty() {
// //     return this.length == 0;
// //   }
// // }

// // const arr1 = new Array(1, 2, 3);
// // const arr2 = new myArray(1, 2, 3);
// // console.log(arr1.length == 0); // lenghtini tekshirivolish
// // console.log(arr2.isEmpty()); // lenghtini tekshirish

// ///////////////////////////////////////////////////////////////////////////////////////
// //xatolikni turini tanlab chiqarish :

// class DivByNull extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name; // klas nomini qaytaradi
//   }
// }
// let res = 0;
// let son = 0;
// try {
//   if (son == 0) {
//     throw new DivByNull("Nolga bolish xatoligi");
//   }
//   res = 1 / son;
// } catch (error) {
//   if (error instanceof DivByNull) {
//     // divbynull ni ozgartirsa else ga kiradi
//     console.log(error);
//   } else {
//     console.log("Nazarda tutilmagan xatolik");
//   }
//   console.log(error);
// }
// console.log(res);

//////////////////////////////////////////////////////mixerlar

// class Fruts {
//   constructor(params) {
//     this.name = params.name;
//     this.price = params.price;
//     this.weight = params.weight;
//   }
// }

// class Vegetables {
//   constructor(params) {
//     this.name = params.name;
//     this.price = params.price;
//     this.weight = params.weight;
//   }
// }

// const ShopMixin = {
//   getName() {
//     return this.name;
//   },
//   getPrice() {
//     return this.price;
//   },
//   getWeight() {
//     return this.weight;
//   },
// };
// /// mixin -  metodni obyekt korinishida yozib olib klasni kengaytirib olish
// Object.assign(Fruts.prototype, ShopMixin); // shunday yozib olinadi
// Object.assign(Vegetables.prototype, ShopMixin);

// const meva1 = new Fruts({ name: "Olma", price: 15000, weight: 5 }); // obyt
// console.log(meva1.getPrice());
//////////////////////////////////////////////////////////////////////////////////////////////////
// BOM -- brauzerda ochadigan oyna console  // brauzer object model
// DOM == // document object model
//live dom viewer sayt // DOM

// nuqta qoyib murojat qilish mm documentdan song
// console.log(document.body);
// console.log(document.body.childNodes);

// for (const node of document.body.childNodes) {
//   console.log(node);
// }

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.previousSibling.previousSibling); // avvalgisining avvalgisini chaqirish
// console.log(document.body.nextSibling);

// console.log(
//   document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild
//     .nextSibling.firstChild.nextSibling
// );

// console.log(document.body.childNodes[3].childNodes[1].childNodes[3]);

// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.previousElementSibling);
// console.log(document.body.children[1]);

//tanlab olish un id ni
// const case21 = document.getElementById("case21");
// console.log(case21); // natijada case21 ga teng bolgan li elementini chiqarib beradi
// // console.log(case22); //tavsiya qilinmasada ,  javada yoq bolsada veb da uni korsatib qoyadi chunki html da yoazilgan nomni globalga korsatib qoyadi
// //klas nomi bn chaqirish :
// const case23 = document.getElementsByClassName("case23");
// console.log(case23);
// //name bn chaqirish :
// const case11 = document.getElementsByName("case11");
// console.log(case11);
// // tag name bn chaqirish:
// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// const case22 = document.querySelector("#case22");
// const case23 = document.querySelector(".case23");
// const cases23 = document.querySelectorAll(".case23");
// // const ulLi = document.querySelector("ul>li"); // ul ga murojat
// const ulLi = document.querySelector("ul>li:last-child"); // ul ga murojat

// console.log(ulLi);
// console.log(case23);
// console.log(cases23);
// console.log(case22);
// console.log(case22.textContent);

// console.log(document.querySelector("a")); // birinchisini olib beradi
// console.log(document.querySelector("a").textContent); // nomi
// console.log(document.querySelector("a[href]").textContent); // linki borlar
// console.log(document.querySelectorAll("a[href]")); // linki borlarini chiqaradi
// console.log(document.querySelector("a[href$=zip]")); // zip i borlariga yetib olmoqchi b

// console.log(document.querySelector(".chapter").closest(".book"));
// console.log(document.querySelector(".book").closest(".chapter"));

// console.log((document.querySelector("a").textContent += "!"));

// const menuItems = document.querySelectorAll("a");
// menuItems.forEach((item) => {
//   console.log(item);
//   //   item.textContent += "!";
//   item.innerHTML += "!";
// });

//////////////////////////////////////////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
