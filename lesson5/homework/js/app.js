//================ 1 - task =================== //

// const qiymat = +prompt("qiymat kiriting:");
const qiymat = 12;

const doira = {
  radius: qiymat,
  DoiraYuzasi: function () {
    console.log(Math.floor(this.radius ** 2 * 3.14));
  },
};

console.log(doira["radius"]);
doira.DoiraYuzasi();

// ================== 2 - task ================== //

const objj = {
  a: 12,
  b: "hi",
};

function InvertKeyValue(obj) {
  for (key in obj) {
    console.log(`${obj[key]} : ${key}`);
  }
}

InvertKeyValue(objj);

// ================= 3 - task ================== //

const data = { a: 3, b: 5, c: 3, d: 7, e: 5, f: 5 };

function findNumber(objj) {
  ob = {};
  for (key in objj) {
  }
}

console.log(findNumber(data));
// findNumber(data);
