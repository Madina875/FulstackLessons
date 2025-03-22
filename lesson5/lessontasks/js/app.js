// //to create an object
// // const obj1 = {};
// // console.log(obj1);

// // const fruits = new Object();
// // console.log(fruits);
// // console.log(typeof fruits); // to find the type

// // // object everytime will start with const
// // const mevalar = {
// //   nomi: "Olma", // properties of the object < key : value >
// //   narxi: 15000,
// //   rangi: "qizil",
// //   "shirin mevami": true, // "" ning ichida yozish shart ' to be the key '
// //   2: "ikki", // number is str whithout writing that it is the str
// //   2: "ikki str", // it'll take the least
// // };

// // console.log(mevalar);
// // console.log(mevalar.nomi); // to get the value if 'nomi'
// // console.log(mevalar["nomi"]);
// // // console.log(mevalar[nomi]); the wrong type using without ' "" '

// // const mevalar = {
// //   nomi: "Olma", // properties of the object < key : value >
// //   narxi: 15000,
// //   rangi: "qizil",
// //   "shirin mevami": true,
// //   2: "ikki",
// //   2: "ikki str",
// // };

// // mevalar.narxi = 10000;
// // delete mevalar[2];
// // console.log(mevalar["narxi"]); // change excisting

// // mevalar.madeIN = "UZB";
// // console.log(mevalar["madeIN"]); // add new

// // const box = {
// //   material: "paper",
// //   color: ["white", "black", "brown", { 1: "true" }],
// //   size: {
// //     width: 21,
// //     height: 22,
// //     length: 23,
// //   },
// // };

// // console.log(box);
// // console.log(box.color[1]);
// // console.log(box.size.height);
// // console.log(box.color[3][1]);
// // console.log(box?.size?.length); // if x not exist the output y
// // if ("size" in box) {
// //   console.log(box.size.length);
// // }

// // if ("size" in box && "lenght" in box.size) {
// //   console.log(box.size.length);
// // }

// // forin function : everything will output automaticaly
// // for (const   in object) {
// //     if (Object.prototype.hasOwnProperty.call(object,  )) {
// //         const element = object[ ];

// //     }
// // }

// const box = {
//   material: "paper",
//   color: ["white", "black", "brown", { 1: "true" }],
//   size: {
//     width: 21,
//     height: 22,
//     length: 23,
//   },
// };

// // for (const key in box) {
// //   console.log(key);
// //   console.log(box[key]);
// // }

// // another but same:
// // const quti = box;
// // quti.material = "iron";
// // console.log(box);
// // console.log(box == quti);

// //learn
// // const box1 = Object.assign({}, box);
// // box1.material = "wood";
// // console.log(box);
// // console.log(box1);
// // console.log(box == box1);

// // const box2 = {};
// // Object.assign(box2, box);
// // console.log(box == box2);

// // const box3 = { ...box1, ...box2, ...quti };

// // const player = {
// //   name: "Abbos",
// //   age: 21,
// //   player: 221,
// //   boots: ["Nike", "Adidas"],
// //   aboutPlayer: function () {
// //     //-  obyektning metodi deyiladi.  < : va function siz yozish mumkin >
// //     console.log(`ismi: ${this.name} , yoshi: ${this.age}`);
// //   },
// //   //arrow function this olmaydi agar ichida yozilsa:
// //   //   aboutPlayer2:  () => {
// //   //    console.log(`ismi: ${this.name} , yoshi: ${this.age}`);
// //   //   },
// // };

// const player = {
//   name: "Abbos",
//   age: 21,
//   player: 221,
//   boots: ["Nike", "Adidas"],
//   aboutPlayer: function () {
//     console.log(`ismi: ${this.name} , yoshi: ${this.age}`);
//   },
//   aboutPlayer2: function () {
//     function inner() {
//       console.log(`ismi: ${this.name} , yoshi: ${this.age}`);
//     }
//     return inner();
//   },
// };

// console.log(player);
// player.aboutPlayer();
// player.aboutPlayer2();

// //nusxa olish :

// const newPlayer = { ...player };
// newPlayer.name = "Abduqodir";
// newPlayer.age = 22;

// newPlayer.aboutPlayer();

// ///////////////////////////////////

// const car = {
//   marka: "BMW",
//   model: "BMW m5 competition",
//   year: 2025,
//   speed: 200,
//   color: "light pink",
// };

// console.log(car);

// if ("km" in car) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// //////////////////////////////////////
// for (const key in car) {
//   console.log(key);
//   console.log(car[key]);
// }
// /////////////////////////////////
// for (const key in car) {
//   if (key == Number(key) || car[key] == Number(car[key])) {
//     continue;
//   } else {
//     console.log(key);
//     console.log(car[key]);
//   }
// }
// //////////////////////////////////////
// const xodimlar = {
//   salim: 21,
//   karim: 25,
// };

// let count = 0;
// let sum = 0;
// for (const key in xodimlar) {
//   count++;
//   sum += xodimlar[key];
// }
// console.log(Math.floor(sum / count));

// ////////////////////////////////////////////
// // ichida funksia yoki oqish

// const user = {
//   last_name: "Komilov",
//   first_name: "Zafar",
//   getFirstName() {
//     return this.first_name;
//   },
//   setFirstName(newName) {
//     return (this.first_name = newName);
//   },
//   get firstName() {
//     //getter
//     // get property kabi ishlaydi
//     return this.first_name;
//   },

//   set firstName(newName) {
//     //setter
//     this.first_name = newName;
//   },
// };

// console.log(user);
// console.log(user.setFirstName("Zafarjon"));

// user.firstName = "Zafarella"; // get bn set bir hil bolishi kk bu console usul set deyiladi  setter '=' bn

// console.log(user.firstName); // xususiyat kabi murojat qilamiz

//////////////////////////////////////

const product = {
  nomi: "Ruchka",
  miqdor: 15,
  narxi: 15000,
  ProductInfo: function () {
    console.log(
      `nomi: ${this.nomi} , miqdori: ${this.miqdor} , narxi: ${this.narxi}`
    );
  },

  SetPrice: function (Price) {
    console.log(this.narxi == Price);
  },
};

// const tovar = { ...product };
// tovar.SetPrice = 200000;

console.log(product);
console.log(product.ProductInfo());
console.log(product.SetPrice(300000));

console.log(product.SetPrice);
///////////////////////////////////////////////////////
const a = {
  a: 10,
  b: 20,
  c: "hello",
  d: 30,
};

let count = 0;
let sum = 0;
for (key in a) {
  if (Number(a[key])) {
    count++;
    sum += a[key];
  }
}
console.log(sum);

//////////////////////////////////////////////////////

const b = {
  Ali: 10,
  Bekzod: 20,
  Vali: "hello",
  Fayz: 30,
};

let biggest = 0;

for (key in b) {
  if (Number(b[key])) {
    biggest = b[key];
    break;
  }
}
console.log(biggest);

let bbb = biggest;

for (key2 in b) {
  if (Number(b[key2]) > bbb) {
    bbb = b[key2];
  }
}

console.log(bbb);

////////////////////////////////////////////////////////////

const c = {
  Ali: 10,
  Bekzod: 20,
  Vali: "hello",
  Fayz: 30,
};

for (key in c) {
  console.log(`${c[key]} : ${key}`);
}
//////////////////////////////////////////////////////

// console.log("222222222".length);

const d = {
  Ali: "HI",
  Bekzod: "YOU",
  Vali: "hello",
  Fayz: "UZBEKISTAN",
};

for (i in d) {
  if (d[i] == Number(d[i])) {
    console.log(d[i]);
  } else {
    console.log(String(d[i]).length);
  }
}

///////////////////////////////////////////////////////
