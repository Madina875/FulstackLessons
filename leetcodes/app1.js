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

function isPrime(n) {
  if (n < 2) {
    console.log(0);
  }
  let trueansw = 0;
  let all = [];
  for (let index = 2; index <= n; index++) {
    if (!n % index == 0) {
      all.push(index);
    } else {
    }
  }
  console.log(all);
}

isPrime(5);

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
