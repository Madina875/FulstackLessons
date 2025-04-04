// const API_URL = "https://api.alquran.cloud/v1/surah/114/uz.sodik";
// //pending fulfilled rejected holatlarda promise boladi
// const test = function () {
//   return new Promise((resolve) => {
//     resolve("TEST");
//   });
// };

// async function test2() {
//   return "TEST";
// }

// console.log(1);
// test().then((data) => {
//   console.log(data);
// });

// async function callTest() {
//   const res = await test2();
//   console.log(res);
// }
// callTest();
// console.log(2);

///////////////////////////////////////////////////////////

// const API_URL = "https://api.alquran.cloud/v1/surah/114/uz.sodik";
// //async
// async function fetchAscyncData(url) {
//   const response = await fetch(url);
//   const jsonData = await response.json();
//   console.log(jsonData);
//   return jsonData.data;
// }
// fetchAscyncData(API_URL);

// // fetch
// function functionName(url) {
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonData) => {
//       console.log(jsonData);
//       return jsonData.data;
//     });
// }

// //then bn tutib olish async ni tagidan yozilgan kod edi
// fetchAscyncData(API_URL).then((data) => {
//   console.log(data);
//   console.log(data.ayahs);
//   console.log(data.ayahs[0].text);
// });

// async function showImage() {
//   const responseImg = await fetch("./img/js.jpg");
//   console.log(responseImg);
//   const blob = await responseImg.blob();
//   const imgEl = document.createElement("img");
//   // imgEl.src = "./images/js.png";
//   imgEl.src = URL.createObjectURL(blob);
//   imgEl.style = "position:fixed;top:10px;left:10px;width:100px";
//   document.body.append(imgEl);
// }
// showImage();

// const txtURL = "13-dars rejasi.txt";

// async function loadaJSONData(txtURL) {
//   try {
//     for (let [key, value] of Response.headers.entries()) {
//       console.log(`${key} -> ${value}`);
//     }
//     let contentType = Response.headers.get("Content.Type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new TypeError("Malumot json formatioda emas");
//     }
//     let json = await Response.json();
//     console.log(json);

//   } catch (error) {
//     console.log(error);
//   }
// }
// loadaJSONData();

////////////////////////////////////////////////////////////////

const API_KEY = "1e5a1f74d4a597c844f45861f0fb3e59";

const city = prompt("shahar nomini kiriting:");

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

async function getWeather(url) {
  const weather = await fetch(url);
  const jsonWeather = await weather.json();
  const doc = (document.body.children[0].textContent = jsonWeather);
  console.log(doc);
}
getWeather(API_URL);
