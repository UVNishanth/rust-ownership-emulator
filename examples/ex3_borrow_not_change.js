"use strict";

const Variable = require('../variable');

let v1 = new Variable("v1", "Hello");
let v2 = new Variable("v2");
v2.borrow(v1);
v2.val = "Wow";                // v2 tries to change borrowed value. Error