// ustoz qo'shimcha misol tashlamadingiz shuning un ball pasaytirib qoymang

//================ 1 - task =================== //

// const qiymat = +prompt("qiymat kiriting:");
const qiymat = 12;

const doira = {
  radius: qiymat,
  DoiraYuzasi: function () {
    console.log(Math.floor(this.radius ** 2 * 3.14));
  },
};

// console.log(doira["radius"]);
doira.DoiraYuzasi();

// ================== 2 - task ================== //

const objj = {
  a: 12,
  b: "hi",
};

function InvertKeyValue(obj) {
  const objjj = {};
  for (key in obj) {
    objjj[obj[key]] = key;
  }
  console.log(objjj);
}

InvertKeyValue(objj);

// ================= 3 - task ================== //

const a = {
  a: 22,
  b: 33,
  s: 44,
};
firstNumber = 0;

for (key in a) {
  if (Number(a[key])) {
    firstNumber = a[key];
    break;
  }
}
let biggest = 0;

for (key in a) {
  if (firstNumber < a[key]) {
    biggest = a[key];
  }
}

console.log(`Natija: ${biggest}`);

// ================= 4 - task ====================== //

// 4 - misolni tushunmadim

const data2 = {
  user: {
    name: "Ali",
    address: {
      city: "Tashkent",
      zip: "100100",
    },
  },
};

console.log(data2);

// Natija:
// {
//   "user.name": "Ali",
//   "user.address.city": "Tashkent",
//   "user.address.zip": "100100"
// }

// ================= 5- task ===================== //
const player1 = {
  name: 12,
  age: 22,
  number: 33,
};
console.log(player1);

const player2 = {
  name: 12,
  age: 22,
  number: 33,
};
console.log(player2);

// yechimi :

let countt = 0;
for (key in player1) countt += 1;
trues = 0;
for (i in player1) player1[i] == player2[i] ? trues++ : trues--;
trues == countt ? console.log("true") : console.log("false");
