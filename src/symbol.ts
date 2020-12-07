export {};
let a = Symbol("a");
let b: symbol = Symbol("b");

var c = a === b; //boolean
let d = a + "x"; //error

const e = Symbol("e");
const f: unique symbol = Symbol("f");

let g: unique symbol = Symbol("f"); // error

let h = e === e; //boolean
let i = e === f; //error
