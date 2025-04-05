const API_URL = "https://restcountries.com/v3.1/all";

async function getCountry(name) {
  let response = await fetch(API_URL);
  let data = await response.json();
  let country = data.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );

  if (country) {
    console.log(`country: ${country.name.common}, capital: ${country.capital}`);
  } else {
    console.log("i didn't found any countries");
  }
}

// task2

getCountry("France");

async function getData() {
  let response = await fetch(API_URL);
  let data = await response.json();

  console.log(data);
}

getData();
