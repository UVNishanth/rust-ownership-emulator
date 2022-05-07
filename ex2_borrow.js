"use strict";

const Variable = require('./variable');

let v1 = new Variable("v1",4);
let v2 = new Variable("v2");
v2.borrow(v1);
v2.val = 3;
console.log(v1.val);