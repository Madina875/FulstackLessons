function tozala(arr) {}

let Input = ["olma", "dastur", "kut", "sudrat", "tuk", "mola"];
let mymap = new Map();
// Output: ["olma", "dastur", "kut"];
for (const element of Input) {
  mymap.set(element, element.split(""));
  console.log(element);
}
console.log(mymap);
for (let key in Input) {
  console.log(Input.at(key));
  for (let keyin of Input.at(key)) {
    if (Input.at(key).includes(keyin)) {
      console.log(true);
      key += 1;
    } else {
      console.log(false);
    }
  }
}
//// 3
// function odamSoni(odamlarholati) {
//   let passangers = 0;

//   for (const [entr, out] of odamlarholati) {
//     passangers += entr;
//     passangers -= out;
//   }

//   return passangers;
// }

// let odamsoni = [
//   [3, 0],
//   [9, 1],
//   [4, 8],
//   [12, 2],
//   [6, 1],
//   [7, 8],
// ];

// console.log(odamSoni(odamsoni));
