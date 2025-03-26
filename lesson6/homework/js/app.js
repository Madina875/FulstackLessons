// ========================= 1 =========================== //

const matn = "asdfghjklzxcvbnmqwertyuio";

function truncate(matn, maxlenght) {
  let element = "";

  if (matn.length == maxlenght) {
    console.log(maxlenght);
  } else if (maxlenght < matn.length) {
    for (let index = 0; index < Number(maxlenght); index++) {
      element += matn[index];
    }
  }
  return `${element}...`;
}

console.log(truncate(matn, 18));

// ==================== 2 ================================= //

function randInt(start, end) {
  let nums = "";
  for (let i = start; i <= end; i++) {
    nums += `${i} `;
  }
  return nums;
}

console.log(randInt(5, 14));

// =========================== 3 ================================= //

const text1 = "salom";
const text2 = "Kalom";

function select(text1, text2) {
  let harflar = "";
  for (let index = 0; index < text1.length; index++) {
    if (text1[index] !== text2[index]) {
      harflar += text1[index];
      harflar += text2[index];
    }
  }
  return harflar;
}

console.log(select(text1, text2));

// ======================== 4 ============================= //

let satr = "najot ta'lim";

function countCharacters(satr) {
  let charCount = {};

  for (let char of satr) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  let result = "";
  for (let char in charCount) {
    result += ` ${char + "*".repeat(charCount[char])} `;
  }

  return result.trim().split().join();
}

console.log(countCharacters(satr));
