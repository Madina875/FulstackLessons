// const promise = new Promise(function (resolve, reject) {
//   console.log("Ma'lumotlar tayyorlanmoqda");
//   const backendData = {
//     server: "UzumMarket",
//     statusCode: 200,
//     data: {
//       product: "iPhone",
//       price: 1200,
//     },
//   };
//   const backendData2 = undefined;
//   if (backendData) {
//     resolve(backendData);
//   } else {
//     reject("Ma'lumotlar bazasidan yuklashda xatolik!");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//     console.log("Ma'lumot o'zgartirilmoqda");
//     const newPromise = new Promise(function (resolve, reject) {
//       data.modified = true;
//       if (data.modified) {
//         resolve(data);
//       } else {
//         reject("Ma'lumotni o'zgartirishda xatolik!");
//       }
//     });

//     newPromise
//       .then((changedData) => {
//         console.log(changedData);
//       })
//       .catch((reason) => {
//         console.log(reason);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //asinxron jarayonini taminlab beradi
//     console.log("Finally");
//   });

// console.log(2);

///////////////////////////////////////////////////////////////////

//prom + enter...

// const sleep = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };
// // 2000 = 2sek
// sleep(2000).then((time) => {
//   console.log(`${time / 1000} sekund o'tdi`); // sek ga otkazildi
// });

// sleep(5000).then((time) => {
//   console.log(`${time / 1000} sekund o'tdi`); // sek ga otkazildi
// });

// Promise.all([sleep(2000), sleep(5000)])
//   .then(() => {
//     console.log("Barcha vadalar bajarildi");
//   })
//   .catch(() => {
//     console.log("Kamida bitta vada bajarilmadi");
//   });
// //Promise.allSettled()

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//   console.log("Birinchi vada bajarildi");
// });

// Promise.any([sleep(2000), sleep(5000)]).then(() => {
//   console.log("Birinchi vada ijobiy natija keldi");
// });

// malumot yuklab obkelib natijani promise korinishida bajarib qaytaradi = fetch()
// const API_URL = "
// const API_URL = "https://restcountries.com/v3.1/users";

// function fetchData(url) {
//   return fetch(url)
//     .then((response) => {
//       // console.log(response);

//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Malumot yuklashda xatolik");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchData(API_URL);

// const response = await fetch(url, {
//   method: "POST", // GET,POST,PATCH,DELETE,etc.
//   mode: "cors", // no-cors,*cors,same-origin
//   cache: "no-cache", // *default,no-cache,reload
//   credentials: "same-origin",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   redirect: "follow",
//   referrerPolicy: "no-referrer",
//   body: JSON.stringify(data),
// });

// function createPost(url) {
//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Yangi maqola",
//       body: "Yangi maqola matni",
//       userId: 1,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// createPost(API_URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// //axsios package
// //codepen.io

// in the vebsayt output by the num of user one user should
