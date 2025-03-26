// ============================ 1 ============================ //

m1 = [1, 2, 3, 4, 2, 3];
m2 = [5, 6, 7, 4, 3];

function difference(m1, m2) {
  allnums = m1.concat(m2);
  let objnums = {};
  answer = [];

  for (const num of allnums) {
    objnums[num] = +0;
  }
  for (const key in objnums) {
    answer.push(key);
  }

  console.log(answer);
}

difference(m1, m2);

// ========================= 2 ============================= //

function move(the_array, ind, toindeks) {
  without_ind = [];
  that = [];
  answerrr = [];

  for (let index = 0; index < the_array.length; index++) {
    index !== ind
      ? without_ind.push(the_array[index])
      : that.push(the_array[index]);
  }

  //berilgan indeksga joylash :
  for (let index = 0; index < without_ind.length; index++) {
    if (index == toindeks) {
      answerrr.push(that);
      answerrr.push(without_ind[index]);
    } else {
      answerrr.push(without_ind[index]);
    }
  }
  return answerrr.flat();
}
console.log(move([10, 20, 30, 40, 50], 0, 2));

// Sinov ma'lumotlari :
// console.log(move([10, 20, 30, 40, 50], 0, 2));

// ========================= 3 ============================== //

arrnums = [1, -2, 3, 4, -5, -6];

function differences(arrr) {
  objjj = {};
  let answers = [];

  for (const num of arrr) {
    objjj[num] = +0;
  }
  for (const key in objjj) {
    answers.push(key);
  }

  return answers;
}
console.log(differences(arrnums));

// ======================= 4 ============================ //

matn = "hello this is the world JavaScript";

let javob = [];

splitted = matn.trim().split(" ");
everyone = {};

splitted.forEach((harf) => {
  everyone[harf.length] = harf;
});

for (const key in everyone) {
  javob.push(everyone[key]);
}
console.log(javob);

// =================== qo'shimcha ======================== //

the_num = [4, 8, 15, 16, 23, 42, 56];

function findthenumsbyAVGN(arrayis) {
  const answer1 = [];
  const answer2 = [];
  nums = arrayis.sort((a, b) => a - b);
  let small = [];
  let large = [];

  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  umumiy_ortacha_qiymat = sum / nums.length;

  thelensof = nums.length / 2;

  for (let index = 0; index < nums.length; index++) {
    if (umumiy_ortacha_qiymat > nums[index]) {
      small.push(nums[index]);
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > umumiy_ortacha_qiymat) {
      large.push(nums[index]);
    }
  }

  let notsames = [];

  for (let index = 0; index < small.length; index++) {
    if (large[index] == undefined) {
      notsames += 1;
    }
  }
  const undefinets = notsames - 1;
  let the_indexof = `-${undefinets}`;

  if (notsames.length == 1) {
    the_indexof = -1;
    small_answer = small.slice(0, the_indexof);

    the_lastnum = small.slice(-1);

    large.unshift(the_lastnum);
    large_answer = large.flat();

    return `${small_answer}   ${large_answer}`;
  } else {
    the_indexof = -1;
    small_answer = small.slice(0, the_indexof);

    the_lastnum = small.slice(-1);

    large.unshift(the_lastnum);
    large_answer = large.flat();

    return `${small_answer}  ${large_answer}`;
  }
}

console.log(findthenumsbyAVGN(the_num));
