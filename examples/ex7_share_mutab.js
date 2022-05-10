"use strict";

const Variable = require('../variable');

let v1 = new Variable("v1", "Hello", true);
let v2 = new Variable("v2");
v2.borrow(v1);                  // v2 immutably borrows v1
let v3 = new Variable("v3");
v3.borrow(v1, true);            // v3 mutable borrows v1. Error