"use strict";

const Variable = require('../variable');

let v1 = new Variable("v1", "Hello", true);
let v2 = new Variable("v2");
v2.borrow(v1);
console.log(v2.val);        // v2 goes out of scope
let v3 = new Variable("v3");
v3.borrow(v1, true);        // v3 muts borrows v1. No error coz immutable v2 has gone out of scope
console.log(v3.val);        