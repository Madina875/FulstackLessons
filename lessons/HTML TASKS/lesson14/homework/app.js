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

let q = /\b(?:\d{2}\s\d{3}\s[A-Z]{3})\b/g;
let w = /\b(?:\d{2}\s[a-zA-Z]{1}\s\d{3}\s[A-Z]{2})\b/g;
let e = /\b(?:[A-Z]{3}\s\d{3})\b/g;
let r = /\b(?:[A-Z]{3}\s\d{2}-\d{2})\b/g;
let t = /\b(?:[A-Z]{1}\s\d{6})\b/g;
let y = /\b(?:[A-Z]{2}\s\d{4})\b/g;
let u = /\b(?:[A-Z]{1}\s\d{6})\b/g;
let i = /\b(?:[A-Z]{1}\s\d{5})\b/g;
let o = /\b(?:\d{2}\s[A-Z]{1}\s\d{6})\b/g;
let p = /\b(?:\d{2}\s[A-Z]{1}\s\d{6})\b/g;
let a = /\b(?:[A-Z]{1}\s\d{6}\s\d{2})\b/g;

const carnum = prompt("avtomobil raqamini kiriting:");

if (
  q.test(carnum) ||
  w.test(carnum) ||
  e.test(carnum) ||
  r.test(carnum) ||
  t.test(carnum) ||
  y.test(carnum) ||
  u.test(carnum) ||
  i.test(carnum) ||
  o.test(carnum) ||
  p.test(carnum) ||
  a.test(carnum)
) {
  console.log(true);
} else {
  console.log(false);
}
