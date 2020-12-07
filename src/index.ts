console.log("Hello TypeScript!");

let a = 1 + 2;

let b = a + 1;

let c = {
  apple: a,
  banana: b,
};

let d = c.apple * 4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function squareOf(n: number) {
  return n * n;
}

console.log(squareOf(5));
// console.log(squareOf("a")); error
