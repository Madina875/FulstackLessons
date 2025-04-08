//  JavaScript tasks focused on conditional statements and loops:

// 1. Check if a Number is Even or Odd

// function isOddorEven(num) {
//   if (num % 2) {
//     console.log("odd");
//   } else {
//     console.log("even");
//   }
// }
// isOddorEven(9);

// 2. Find the Largest of Three Numbers
// function findLargestof3(a, b, c) {
//   if (a >= b && a >= c) {
//     console.log(a);
//   } else if (b >= a && b >= c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }
// findLargestof3(8, 5, 2); // Output: 8

// 3. Print Numbers from 1 to 20 (Skipping Multiples of 3)

// function nonMultipleof3() {
//   let answer = [];
//   for (let index = 1; index <= 20; index++) {
//     if (index % 3 == 0) {
//       continue;
//     } else {
//       answer.push(index);
//     }
//   }
//   console.log(answer.join(", "));
// }

// nonMultipleof3();

// 4. Sum of Even Numbers from 1 to N

// function sumofEvens(n) {
//   let sum = 0;
//   let count = 2; // Start from 2 (first even number)
//   while (count <= n) {
//     sum += count;
//     count += 2; // Increment by 2 to only consider even numbers
//   }
//   return sum;
// }
// console.log(sumofEvens(4)); // Output: 6 (2 + 4)

// // 5. Guess the Number Game
// num = 5;
// do {
//   let a = +prompt("guess the number which i entered...");
//   if (a == num) {
//     console.log("you're right!👌😒🙂👍");
//     break;
//   }
// } while (true);

// 1️⃣ Check if a Number is Prime

/*Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// */
// function countPrimes(n) {
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   let answeer =  count;
//   return answeer;
// }

// countPrimes(10); // Output: 4

// let n = 6;

// for (let index = 2; index <= Math.sqrt(n); index++) {
//   if (n % index == 0) {
//     console.log(false);
//   }
// }
// console.log(true);

// 2️⃣ Factorial of a Number

// function factorial(n) {
//   let nuums = 1;
//   for (let index = 1; index <= n; index++) {
//     nuums *= index;
//   }
//   console.log(nuums);
// }
// factorial(5);

// 3️⃣ Reverse a Number

// function reverseNumber(num) {
//   let thenums = `${num}`.split("");
//   console.log(Number(thenums.reverse().join("")));
// }

// reverseNumber(1234);

// 4️⃣ FizzBuzz Challenge

// for (let index = 1; index <= 50; index++) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (index % 3 === 0) {
//     console.log("Fizz");
//   } else if (index % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(index);
//   }
// }

// 5️⃣ Find the Largest Digit in a Number

// function largestDigit(n) {
//   thenums = `${n}`.split("");
//   thelargest = thenums[0];
//   for (const element of thenums) {
//     if (Number(element) > Number(thelargest)) {
//       thelargest = element;
//     }
//   }
//   console.log(Number(thelargest));
// }
// largestDigit(28734);

// ////////////////////////////////////////////////////////////

// //
// // Create an object named "person" with properties: name, age, and city
// // Then print each property using dot notation
// // Your code here to print: Name, Age, City

// const person = {
//   name: "Ana",
//   age: 22,
//   city: "USA",
// };

// console.log(`${person.name}, ${person.age}, ${person.city}`);

// //
// // Given a string, make it all uppercase and find the index of the word "JavaScript"

// const words = "this is the world most important langiage JavaScript gocha?";
// const uppercased = words.toUpperCase();
// console.log(uppercased.split(" ").indexOf("JAVASCRIPT"));
// console.log(uppercased.split(" "));

// //
// // Create an array of your 5 favorite fruits
// // Add one fruit to the end, remove the first fruit, and then print the final array

// const myFavFRuits = ["cherry", "apple", "pineapple", "orange", "peach"];

// const onefr = myFavFRuits.push("banana"); // to the end
// const lastone = myFavFRuits.shift(); // end one delete
// console.log(myFavFRuits);

// //
// // Create an array of numbers from 1 to 5
// // Loop through it and print each number multiplied by 2

// const numbers = [1, 2, 3, 4, 5];
// for (const element of numbers) {
//   console.log(element*2);
// }

// //
// // Create an object called "student" with properties:
// // name (string), grades (array of 3 numbers)
// // Calculate and print the average grade

// const student = {
//   name: "Alya",
//   grades: [3, 4, 5],
// };

// for (const key in student) {
//   if (key == "grades") {
//     let sum = 0;
//     let lens = student[key].length;
//     for (const element of student[key]) {
//       sum += element;
//     }
//     console.log(sum / lens);
//   }
// }
// //instead

// const avg = student.grades.reduce((a, b) => a + b) / student.grades.length;
// console.log(avg);

///////////////////////////////////////////

// Given an array of numbers, return a new array with each number squared.

// const nums = [1, 2, 3, 4, 5];
// const mymapsquared = new Map();

// for (const element of nums) {
//   mymapsquared.set(element, element ** 2);
// }
// console.log(mymapsquared);

// // anotherone:
// const squared = nums.map((n) => n ** 2);
// console.log(squared);

// //

// // Given an array of words, return only the words that are longer than 4 letters.

// const words = ["cat", "giraffe", "sun", "elephant", "dog"];

// const longWords = words.filter((word) => word.length > 4);
// console.log(longWords);

// //

// // Remove duplicates from the following array using Set

// const colors = ["red", "blue", "red", "green", "blue", "yellow"];

// const oneset = new Set();
// for (const element of colors) {
//   oneset.add(element);
// }
// console.log(oneset);

// //to array
// const uniqueColors = [...new Set(colors)];
// console.log(uniqueColors);

// // Add the word "Hello" in front of each name in the array

// const names = ["Alice", "Bob", "Charlie"];

// let mymap = new Map();
// let answeeer = [];

// for (const element of names) {
//   mymap.set(element, "Hello " + element);
// }
// for (const element of names) {
//   answeeer.push(mymap.get(element));
// }

// console.log(answeeer);

// //shorter version:
// const greeted = names.map((name) => `Hello ${name}`);
// console.log(greeted);

// //

// // Given an array of numbers, first remove all numbers less than 10,
// // then return a new array where each number is doubled

// const numbers = [3, 12, 5, 18, 7, 20];
// let mymap2 = new Map();
// let biggerthanTen = [];

// for (const element of numbers) {
//   if (element > 10) {
//     biggerthanTen.push(element);
//   }
// }

// for (const element of biggerthanTen) {
//   mymap2.set(element, element * 2);
// }

// console.log(mymap2);

// //this version :
// const result = numbers.filter((n) => n > 10).map((n) => n * 2);
// console.log(result);

//////////////////////////////////////////////////////////////////

// Given this object, use destructuring to extract name and age

// const user = {
//   name: "Lana",
//   age: 28,
//   city: "Tokyo",
// };

// const { name, age, city } = user;
// console.log(name, age);
// //

// // Create a Date object for today's date
// // Then print the current year

// const todaysDate = new Date();

// console.log(todaysDate.getFullYear());

// //

// // Convert the following object to a JSON string

// const book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   year: 1988,
// };

// console.log(JSON.stringify(book));

// //

// // Convert the following JSON string back into a JavaScript object

// const jsonStr = '{"product":"Laptop","price":999,"inStock":true}';

// console.log(JSON.parse(jsonStr));

// //

// // Use try-catch to catch the error when trying to parse bad JSON

// const badJson = '{name:"Broken JSON"}'; // Invalid JSON

// try {
//   console.log(JSON.parse(badJson));
// } catch (error) {
//   console.log(
//     "youra stupid that cat'n find the error in your code" //,error.message the place where the error occured
//   );
// }

///////////////////////////////////////////////////////////////////////////////////

//  Basic Structure of a Class:

// class Person {
//   constructor(name, age) {
//     this.name = name; // property
//     this.age = age; // property
//   }

//   greet() {
//     // method
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const p1 = new Person("Lana", 28);
// p1.greet();

/*
🧠 Quick Terms:

Term	            What It Means

class           	Defines the blueprint (template)
constructor()   	Special method that runs when you create a new object
this 	            Refers to the current object
method           	A function defined inside the class
new 	            Keyword to create an object from the class

*/

//////////////////////////////////////////////////////////////////////////////////

// class dan foydalanib hmtl ga ulangan holida unga stil berib , sozlash

// class MyComponent {
//   constructor(params) {
//     this.element = document.querySelector(params.selector);
//   }
//   show() {
//     this.element.style.display = "block";
//   }
//   hide() {
//     this.element.style.display = "none";
//   }
// }

// // stil berish un voris oamiz

// class Box extends MyComponent {
//   constructor(params) {
//     super(params);
//     this.element.style.background = params.color;
//     this.element.style.height = params.height;
//     this.element.style.width = params.width;
//   }
// }
// natijada stil beradigan class bor

//obyektlari:

// const box1 = new Box({
//   selector: "#box1",
//   width: "20px",
//   height: "300px",
//   color: "black",
// });

// const box2 = new Box({
//   selector: "#box2",
//   width: "100px",
//   height: "100px",
//   color: "pink",
// });

// const box3 = new Box({
//   selector: "#box3",
//   width: "100px",
//   height: "100px",
//   color: "purple",
// });
// // ochirish bn chiqarish : main ning metodlari
// box2.hide();
// box2.show(); // box2 misolida

// bunda main div ni olib uning ichidagi narsalarni qanday korinishda chiqarish un :

// class MainBox extends MyComponent {
//   constructor(params) {
//     super(params);
//   }
//   row() {
//     this.element.style.display = "flex";
//   }
//   column() {
//     this.element.style.display = "block";
//   }
// }

// const mainbox = new MainBox({ selector: "#main" });
// mainbox.row(); // row qilib chiqardik

////////////////////////////////////////////////////////////////////////////////
//DOM AND DOM TREE

// DOM = объектная модель всей веб-страницы
// Позволяет управлять страницей через JavaScript

/*
🛠️ Основные DOM-методы (на практике):

Что сделать    	JS код
Получить элемент по id	    document.getElementById("id")
По тегу                   	document.getElementsByTagName("p")
По классу	                  document.getElementsByClassName("class")
По CSS-селектору          	document.querySelector(".class")
Изменить текст            	element.textContent = "New"
Изменить HTML	              element.innerHTML = "<b>Hi</b>"
Добавить элемент	          parent.appendChild(newElement)

*/

// С помощью JavaScript измени текст внутри <h1> на "Новый заголовок!"
document.getElementById("title").textContent =
  "this is me gpt how are youuu 😎";

// Измени стиль текста так, чтобы он стал жирным (font-weight: bold) через JS.
const a = document.getElementById("myText");
a.style.fontWeight = "bold";
// Сделай так, чтобы блок исчез (display: none), когда пользователь нажимает на него.
const b = document.getElementById("secretBox");
b.style.display = "none";
// Через JS добавь в конец списка новый <li>Пункт 3</li>
// document.getElementById("myList").innerHTML += "<li>это третий😎</li>";
const li = document.createElement("li");
li.textContent = "это третий😎";
document.getElementById("myList").appendChild(li);

// Когда пользователь наводит мышку на кнопку — меняй её цвет на зелёный. А когда убирает — возвращай обычный.
// const element = document.getElementById("hoverBtn");
// element.style.backgroundColor = "lightgreen";

const element = document.getElementById("hoverBtn");

element.addEventListener("mouseover", () => {
  element.style.backgroundColor = "lightgreen";
});

element.addEventListener("mouseout", () => {
  element.style.backgroundColor = "";
});

///////////////////////////////////////////////////////////////////////////////////////////
//Promise:

const p1 = Promise.resolve("🍕 Пицца");
const p2 = Promise.resolve("🍔 Бургер");
const p3 = Promise.resolve("🥤 Напиток");

Promise.all([p1, p2, p3]).then((foods) => {
  console.log("Заказ готов:", foods);
});

//
new Promise((resolve) => {
  resolve(2);
})
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 1;
  })
  .then((result) => {
    console.log("Результат:", result); // 5
  });

//
function failPromise() {
  return new Promise((_, reject) => {
    reject("Произошла ошибка ❗");
  });
}

failPromise()
  .then((res) => console.log(res))
  .catch((err) => console.error("Ошибка:", /*err or */ "not working"));

//
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Прошло ${ms} миллисекунд`);
    }, ms);
  });
}

wait(2000).then(console.log); // Через 2 секунды: "Прошло 2000 миллисекунд"

//

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Всё прошло успешно!");
  } else {
    reject("❌ Что-то пошло не так.");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

/////////////////////////////////////////////////////////////////////////////

// 📚 1. Async/Await Examples
// 1️⃣ Simple Async/Await Function

async function sayHello() {
  return "Hello, World!";
}

sayHello().then(console.log); // "Hello, World!"
// 🔹 Explanation: The async function returns a promise, and await allows us to wait for the result without blocking the thread.

//

// 2️⃣ Handling Errors with Try-Catch

async function getData() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
// 🔹 Explanation: We use try-catch to handle errors gracefully in asynchronous code. If any part fails, the catch block handles it.

//

// 3️⃣ Async/Await with Multiple Asynchronous Calls

async function fetchData() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users");
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");

  const users = await userData.json();
  const posts = await postData.json();

  console.log(users, posts);
}

fetchData();
// 🔹 Explanation: Each await waits for the promise to resolve, one after the other.

//

// 4️⃣ Async/Await with Parallel Requests

async function fetchMultiple() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    ),
  ]);
  console.log(users, posts);
}

fetchMultiple();
// 🔹 Explanation: Promise.all() allows us to run multiple asynchronous requests in parallel, improving performance.

//

// 5️⃣ Returning from Async Function

async function getUserInfo() {
  return { name: "John Doe", age: 30 };
}

getUserInfo().then((data) => {
  console.log(data.name); // "John Doe"
});
// 🔹 Explanation: Even though we're returning an object, it’s wrapped in a promise. await would resolve this promise when used.

//////////////////////////////////////////////////////////////////////////////

// 📡 5 Fetch Examples
// 1️⃣ Basic Fetch Request

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
// 🔹 Explanation: This is a basic GET request to fetch user data from a placeholder API.

//

// 2️⃣ Fetch with Async/Await

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUsers();
// 🔹 Explanation: Using async/await to handle asynchronous fetch requests cleanly.

//

// 3️⃣ Fetch POST Request

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "This is a new post",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log(data);
}

createPost();
// 🔹 Explanation: Sending a POST request with a JSON payload to create a new post on the server.

//

// 4️⃣ Fetch with Error Handling

async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchDataWithErrorHandling();
// 🔹 Explanation: Fetch with proper error handling. We check if the response was successful and handle failures accordingly.

//

// 5️⃣ Fetch with Custom Headers

async function fetchWithHeaders() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      Authorization: "Bearer your-token-here",
      Accept: "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
}

fetchWithHeaders();
// 🔹 Explanation: Custom headers can be added to the fetch request. This is useful for APIs that require tokens or specific content types.

//
/*
🧠 Recap:
async/await simplifies handling asynchronous code, making it more readable than .then().

fetch() is an easy way to make HTTP requests in JavaScript. By default, it makes GET requests, but you can customize it for POST, PUT, etc.

Use Promise.all() to run multiple asynchronous operations in parallel.
*/
