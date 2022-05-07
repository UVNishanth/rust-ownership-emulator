"use strict";

const Variable = require('./variable');

let v1 = new Variable("v1",4);
let v2 = new Variable("v2");
v2.val = v1;
console.log(v1.val);
//console.log(v1.val);