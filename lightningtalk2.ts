function arrayProduct(arr: number[]): number {
  return arr.reduce((product, item) => product * item, 1);
}

console.log("arrayProduct( [1, 2, 3, 4, 5] ) should be 120; result:", arrayProduct([1,2,3,4,5])); // 120
console.log("arrayProduct( [1, 2, 3, 4, 'five'] ) = NaN; result:", arrayProduct([1,2,3,4,'five'])); // TypeScript Compile Error









function getAgeNextYear(personObj: {name: string; age: number}): number {
  // control the format of personObj being passed in!!
  return personObj.age + 1;
}

console.log(getAgeNextYear( {name: 'Han', age: 32} ) ); // 33
console.log(getAgeNextYear( {name: 'Han', oldness: 32} ) ); // TypeScript Compile Error