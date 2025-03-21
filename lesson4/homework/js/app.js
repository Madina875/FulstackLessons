//task1

function findYear(a, b) {
  if (a > b) {
    console.log(a - b - 2);
  } else if (a < b) {
    console.log(b - a - 2);
  } else {
    console.log("something went wrong please try again");
  }
}

findYear(12, 33);

//task2

// findFactors(12); // 1, 2, 3, 4, 6, 12.

function findFactors(a) {
  if (a == 0) console.log(0);
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) console.log(i);
  }
}
findFactors(14);

//task3

function isPrime(n) {
  if (n == 0) return 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) count += 1;
  }
  if (count == 2) console.log("tub");
  else if (count > 2) console.log("tub emas");
}
isPrime(18);

//task4

function findifPerfect(n) {
  if (n == 0) return 0;
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      count += i;
    }
  }

  if (count == n) {
    return "true";
  } else if (count !== n) {
    return "false";
  } else {
    return "something went wrong";
  }
}

console.log(findifPerfect(28));
// true (1 + 2 + 4 + 7 + 14 = 28)
