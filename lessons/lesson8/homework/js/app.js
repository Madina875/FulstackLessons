// ======================== 1-savol ======================== //

NestedMap = new Map();

NestedMap.set("Madina", new Map().set("+9989912345"));
NestedMap.set("Sarvar", new Map().set("+998992345").set("+998995678"));
NestedMap.set(
  "Oychehra",
  new Map().set("+998993456").set("+998997890").set("+9989923456")
);
NestedMap.set("Nafisa", new Map().set("+99899789").set("+99899123"));

//foydalanuvchilarning tel raqamlarini o'zgartirish :
function f_t_ozgartirish(person, nomer, ozgartirish) {
  let birmapp = NestedMap.get(person);
  if (birmapp.has(nomer)) {
    birmapp.delete(nomer);
    birmapp.set(ozgartirish);
  }
}

// //berilgan foydalanuvchining tel raqamini o'chirish :

function del_thenum(person, thenum) {
  let birmapp = NestedMap.get(person);
  birmapp.delete(thenum);
}

// foydalanuvchilarning telefon raqamlarini qo'shish :

function f_telini_qoshish(person, number) {
  NestedMap.get(person).set(number);
}

// // berilgan odamning barcha nomerlarini chiqarib berish :

function allNums_of_person(person) {
  const birmap = NestedMap.get(person);
  let allnums_nums = [];

  for (const key of birmap.keys()) {
    allnums_nums.push(key);
  }
  console.log(allnums_nums);
}

// ===============Tekshirish ========================================================================
//bizda bor funksiyalar :
// allNums_of_person()
// f_t_ozgartirish()
// f_telini_qoshish()
// del_thenum()

allNums_of_person("Nafisa");
f_t_ozgartirish("Nafisa", "+99899789", "12345");
allNums_of_person("Nafisa");
f_telini_qoshish("Nafisa", "998995656");
allNums_of_person("Nafisa");
del_thenum("Nafisa", "12345");
allNums_of_person("Nafisa");

// ============== 2 - savol =============== //

/*

 task1 va task2 rasmlaridagi INPUT va OUTPUTlardan kelib chiqib MAPdan foydalanib 
natijalarni chiqaring. INPUT ma'lumotlari array ichidagi matn ko'rinishida beriladi.
task1.png rasmda har bir user qaysi IPdan necha marta ulanganini MAPda chiqaring. 
task2.png rasmda har bir userName bo'yicha TotalDuration va takrorlanmas IP addresslar 
tartiblangan holda chiqish kerak. 

// output har bir user qaysi ip dan necha marta ulanganini mapda chiqarish :
// username:
//192.23.33.40 => 1.
//destroyer:
//192.23.30.42 => 2.
//192.23.33.40 => 1.
//mother:
// 192.23.30.41 => 1.
*/

let inputs = [
  "IP=192.23.30.40 message='Hello&derps.' user=destroyer",
  "IP=192.23.30.40 message='Hello&derps.' user=else",
  "IP=192.23.30.41 message='Hello&yall.' user=destroyer",
  "IP=192.23.30.41 message='Hello&yall.' user=destroyer",
  "IP=192.23.30.41 message='Hey&son.' user=mother",
  "IP=192.23.155.40 message='Hello.' user=unknown",
];

let oneobject = new Object();
for (const obj of inputs) {
  oneobject[obj.split("=").at(-1)] = new Map();
}

let every_ip = [];
for (const obj of inputs) {
  let a = obj.split("=").at(1).slice(0, 13);
  let b = obj.split("=").at(3);
  let answeri = [b, a];
  every_ip.push(answeri);
}

for (const [key, value] of every_ip) {
  if (oneobject[key].has(value)) {
    oneobject[key].set(value, oneobject[key].get(value) + 1);
  } else {
    oneobject[key].set(value, 1);
  }
}
console.log(oneobject);

////////////////////////////////////////////////////// task2
// ichma ich yozish :

let inputs2 = [
  "192.168.0.11 peter 33",
  "10.10.17.33 alex 12",
  "10.10.17.35 peter 30",
  "10.10.17.34 peter 120",
  "10.10.17.34 peter 120",
  "212.50.118.81 alex 46",
  "212.50.118.81 alex 4",
  "284.238.140.178 nakov 25",
  "84.238.140.178 nakov 35",
];

let usersMap = new Map();

for (const entry of inputs2) {
  let [ip, userName, duration] = entry.split(" ");
  duration = parseInt(duration);

  if (!usersMap.has(userName)) {
    usersMap.set(userName, { totalDuration: 0, ips: new Set() });
  }
  let userData = usersMap.get(userName);

  // console.log(userData);

  userData.totalDuration += duration;

  userData.ips.add(ip);
}

console.log(usersMap);

for (const [userName, data] of usersMap) {
  console.log(
    `${userName}: ${data.totalDuration} [${[...data.ips].join(", ")}]`
  );
}
