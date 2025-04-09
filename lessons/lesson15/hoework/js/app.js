//1
function tozala(arr) {
  const map = new Map();
  arr.forEach((soz) => {
    const kalit = [...soz].sort().join("");
    if (!map.has(kalit)) {
      map.set(kalit, soz);
    }
  });
  return [...map.values()];
}
const massiv = ["olma", "dastur", "kut", "sudrat", "tuk", "mola"];
const tozalangan = tozala(massiv);
console.log(tozalangan);

//2

class Avto {
  constructor(model, marka, year) {
    this.model = model;
    this.marka = marka;
    this.year = year;
  }
}
class YengilAvto extends Avto {
  constructor(model, marka, year) {
    super(model, marka, year);
    this.model = model;
    this.marka = marka;
    this.year = year;
  }
}
class YukAvto extends Avto {
  constructor(model, marka, year) {
    super(model, marka, year);
    this.model = model;
    this.marka = marka;
    this.year = year;
  }
}
class garaj {
  constructor(joylarSoni) {
    this.joylarSoni = joylarSoni;
    this.avtolar = new Array();
  }

  joyla(yangiAvto) {
    if (this.avtolar.length != this.joylarSoni) {
      this.avtolar.push(yangiAvto.constructor.name);
      console.log("saqlandi");
    } else {
      console.log("oshib ketti");
    }
  }
  chiqar() {
    console.log(this.avtolar);
  }
}
const b = new garaj(2);
b.joyla(new YengilAvto("asdfgh", "asdfgh", 2000));
b.joyla(new YengilAvto("asdfgh", "asdfgh", 2000));
b.joyla(new YengilAvto("asdfgh", "asdfgh", 2000));
b.chiqar();

// 3

function odamSoni(odamlarholati) {
  let passangers = 0;

  for (const [entr, out] of odamlarholati) {
    passangers += entr;
    passangers -= out;
  }

  return passangers;
}

let odamsoni = [
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
];

console.log(odamSoni(odamsoni));
