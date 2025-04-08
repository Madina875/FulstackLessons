let nums = [3, 4, 2, 0, 7, 2, 8, 6, 2, 7];
let myMap = new Map();

for (const element of nums) {
  if (myMap.has(element)) {
    myMap.set(element, myMap.get(element) + 1);
  } else {
    myMap.set(element, 1);
  }
}

console.log(nums);
console.log(myMap);

let arr = [];
for (const element of myMap) {
  let answer = element.at(0) ** element.at(1);
  arr.push(answer);
}
console.log(arr);
