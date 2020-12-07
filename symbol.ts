export {};
let a = Symbol("a");

let b: symbol = Symbol("b");

var c = a === b;
let d = a + "x"; //error
