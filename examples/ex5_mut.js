"use strict";

const Variable = require('../variable');

let v1 = new Variable("v1", "Hello", true);
v1.val = "Hi";
console.log(v1.val);