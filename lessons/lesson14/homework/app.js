// qandah holatlar berilishi mumkin:
// q = /01 123 ABC/;
// w = /01 A 123 BC/;
// e = /PAA 000/;
// r = /CMD 12-34/;
// t = /D 012345/;
// y = /UN 0123/;
// u = /Y 012345/;
// i = /X 01234/;
// o = /10 M 012345/;
// p = /01 H 012345/;
// a = /T 012345 01/;

let q = /\b(?:\d{2}\s\d{3}\s[A-Z]{3})\b/;
let w = /\b(?:\d{2}\s[a-zA-Z]{1}\s\d{3}\s[A-Z]{2})\b/;
let e = /\b(?:[A-Z]{3}\s\d{3})\b/;
let r = /\b(?:[A-Z]{3}\s\d{2}-\d{2})\b/;
let t = /\b(?:[A-Z]{1}\s\d{6})\b/;
let y = /\b(?:[A-Z]{2}\s\d{4})\b/;
let u = /\b(?:[A-Z]{1}\s\d{6})\b/;
let i = /\b(?:[A-Z]{1}\s\d{5})\b/g;
let o = /\b(?:\d{2}\s[A-Z]{1}\s\d{6})\b/;
let p = /\b(?:\d{2}\s[A-Z]{1}\s\d{6})\b/;
let a = /\b(?:[A-Z]{1}\s\d{6}\s\d{2})\b/;

const carnum = prompt("avtomobil raqamini kiriting:");
const regexes = [q, w, e, r, t, y, u, i, o, p, a];
const isValid = regexes.some((reg) => reg.test(carnum));
// some arr ichini tekshiradi va birinchi chiqqan false ni qaytatib yuboradi
console.log(isValid);

//or

// if (
//   q.test(carnum) ||
//   w.test(carnum) ||
//   e.test(carnum) ||
//   r.test(carnum) ||
//   t.test(carnum) ||
//   y.test(carnum) ||
//   u.test(carnum) ||
//   i.test(carnum) ||
//   o.test(carnum) ||
//   p.test(carnum) ||
//   a.test(carnum)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }
