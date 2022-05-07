"use strict";

const Variable = require('./variable');

function inc(obj){
    obj.val = obj.val + 1;
}

let v1 = new Variable("v1",4);
let v2 = new Variable("v2");
v2.borrow(v1);
inc(v1);