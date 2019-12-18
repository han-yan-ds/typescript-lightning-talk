function times(a: number, b: number): number {
  return a * b;
}

let nine: number;
let three: number;

nine = 9;
three = 3;

console.log(times(nine, three)); // 27
console.log(times('nine', three)); // TypeScript Compile Error