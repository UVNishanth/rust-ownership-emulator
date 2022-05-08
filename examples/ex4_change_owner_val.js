"use strict";

const Variable = require('../variable');

function inc(obj){
    obj.val = obj.val + "world";
}

let v1 = new Variable("v1", "Hello", true);
let v2 = new Variable("v2");
v2.borrow(v1, true);
inc(v1);                // trying to change v1 after v2 has borrowed from v1. Error