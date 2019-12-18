// tuple:  [make, model, year]

function addCar(carInfo: [string, string, number]) { //
  // add this car to database
}

addCar(['VW', 'Golf', 2017]); // OK
addCar([1996, 'Mazda', 'Miata']); // TypeScript Compile Error
// I don't want 1996 to show up in my database under Makes!!