let randomId = Math.floor(Math.random() * 898) + 1; // 1 dan 898 gacha tasodifiy ID
// let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

// Masala1:
//async
async function getWeather() {
  const weather = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const jsonWeather = await weather.json();

  // let button = document.createElement("button");
  // button.style.fontFamily = "Georgia";
  // button.style.fontSize = "25px";
  // button.style.borderRadius = "29px";
  // button.style.backgroundColor = "blue";
  // button.style.padding = "12px";

  // document.body.appendChild(button);

  // const wordContainer = document.createElement("div");
  // wordContainer.style.marginTop = "20px";
  // wordContainer.style.fontSize = "24px";
  // wordContainer.style.fontWeight = "bold";
  // document.body.appendChild(wordContainer);

  // const name = document.createElement("h1");
  // name.textContent = jsonWeather.name;
  // name.style.fontFamily = "Verdana";
  // document.body.appendChild(name);

  // const img = document.createElement("img");
  // img.src = jsonWeather.sprites["front_default"];
  // img.style.width = "400px";
  // img.style.borderRadius = "24px";
  // img.style.backgroundColor = "white";
  // document.body.appendChild(img);

  //   button.addEventListener("click", () => {});
  // }
}
getWeather();

//   button.addEventListener("click", () => {
//     wordContainer = `${document.body.appendChild(name)}
//     ${document.body.appendChild(img)}`;
