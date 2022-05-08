"use strict";

module.exports = class Variable{

    constructor(name, val, mut = false){
        this.name = name;
        this.value = val;
        this.borrowers = [];
        this.out_of_scope = false;
        this.can_change = true;
        this.mut = mut;
        this.borrowed_as_mutable = null;
    }

    get val(){
        if (this.out_of_scope === true){
            throw new Error("Value was moved");
        }
        if(this.borrowed_from != null){
            let obj = this.borrowed_from;
            obj.can_change = true;
            obj.borrowed_as_mutable = null;
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

    borrow(obj, mut = false){
        if(obj.mut === false && mut === true){
            throw new Error("cannot borrow as mutable because "+obj.name+" is immutable");
        }
        if(obj.borrowed_as_mutable === true){
            throw new Error("cannot borrow " + obj.name +" as mutable more than once at a time");
        }
        if(obj.borrowed_as_mutable === false && mut === true){
            throw new Error("cannot borrow " + obj.name +" as mutable because it is also borrowed as immutable");
        }
        this.value = obj.value;
        if(mut === false){
            this.can_change = false;
            obj.borrowed_as_mutable = false;
        }
        else{
            obj.borrowed_as_mutable = true;
            this.can_change = true;      
        }
        obj.borrowers.push(this);
        this.borrowed_from = obj;
    }
};
