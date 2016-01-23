"use strict";
let hello = require('./day1_exports').hello;
let hi = require('./day1_exports');

console.log(typeof hello);
console.log(hello);
console.log(typeof hi);
console.log(hi);
hello();
hi.hello();
hi.hi();

module.exports = hi;