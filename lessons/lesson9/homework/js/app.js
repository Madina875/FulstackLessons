// // task1 :

function find_time(bosh, tugash) {
  let now = new Date(0, 0, 0, 0, 0);
  let now2 = new Date(0, 0, 0, 0, 0);
  const boshV = bosh.split(":");
  const tugashV = tugash.split(":");

  now.setHours(+boshV[0]);
  now.setMinutes(+boshV[1]);
  now2.setHours(tugashV[0]);
  now2.setMinutes(tugashV[1]);

  if (now2 < now) {
    console.log(
      "Xato: tugash vaqti  boshlanish vaqtidan oldin bo'lishi mumkin emas"
    );
  } else {
    now2.setHours(now2.getHours() - now.getHours());
    now2.setMinutes(now2.getMinutes() - now.getMinutes());

    const answer = now2.toTimeString();

    console.log(answer);
  }
}

find_time("18:30", "12:00");

// //task 2 :

// /*
// 2.Foydalanuvchi prompt orqali  bank ish kuni kiritadi (masalan, 60).
// Siz foydalanuvchi kiritgan bank ishkunidan kelib chiqib yilning
// qaysi oy va qaysi sanasida aytilgan kun kelishini hisoblovchi funksiya yozing.
// Bank ish kunida shanba va yakshanba dam olish kuni sifatida hisoblanmaydi.

// */
function getFutureDate(days) {
  let date = new Date();

  while (days > 0) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      days--;
    }
  }

  console.log(date.toLocaleDateString());
}

getFutureDate(3);

// task 3

function findCommonKeys(obj1, obj2) {
  let result = {};

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        let nested = findCommonKeys(obj1[key], obj2[key]);
        if (Object.keys(nested).length) {
          result[key] = nested;
        }
      } else if (obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }
  }

  return result;
}

let jsonData1 = {
  user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000",
    },
  },
  active: true,
};

let jsonData2 = {
  user: {
    name: "Ali",
    age: 30,
    address: {
      city: "Tashkent",
      zip: "200000",
    },
  },
  active: true,
};

console.log(findCommonKeys(jsonData1, jsonData2));
