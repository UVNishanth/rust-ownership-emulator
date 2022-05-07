"use strict";

module.exports = class Variable{

    constructor(name, val){
        this.name = name;
        this.value = val;
        this.borrowers = [];
        this.out_of_scope = false;
        this.can_change = true;
    }

    get val(){
        if (this.out_of_scope === true){
            throw new Error("Value was moved");
        }
        return this.value;
    }

    set val(obj){
        if (!(this.borrowers === undefined || this.borrowers.length === 0)){
            throw new Error("cannot assign to "+this.name+" because it is borrowed");
        }
        if(this.can_change === false){
            throw new Error("Borrowed value cannot be changed");
        }
        this.value = obj.value;
        obj.out_of_scope = true;
    }

    borrow(obj){
        this.value = obj.value;
        this.can_change = false;
        obj.borrowers.push(this);
    }
};
