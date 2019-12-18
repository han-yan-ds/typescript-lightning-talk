function arrayProduct(arr) { //
  return arr.reduce((product, item) => product * item, 1);
}

console.log("arrayProduct( [1, 2, 3, 4, 5] ) should be 120; result:", arrayProduct([1,2,3,4,5]));
console.log("arrayProduct( [1, 2, 3, 4, 'five'] ) = NaN; result:", arrayProduct([1,2,3,4,'five']));









function getAgeNextYear(personObj) { //
  // control the format of personObj being passed in!!
  return personObj.age + 1;
}

console.log("getAgeNextYear( {name: 'Han', age: 32} ) should be 33", getAgeNextYear( {name: 'Han', age: 32} ) );
console.log("getAgeNextYear( {name: 'Han', oldness: 32} ) should be 33", getAgeNextYear( {name: 'Han', oldness: 32} ) );