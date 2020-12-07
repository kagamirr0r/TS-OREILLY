export {};
let a = 1234n; //bigint

const b = 5678n; //5678n

var c = a + b;

let d: bigint = 1.2; //error

let e: bigint = 100; //error
