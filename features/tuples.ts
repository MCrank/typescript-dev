const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Probably not going to use tuples very often
// No idea what these number actuall are
const carSpecs: [number, number] = [400, 3354];

// Can use an object to better understand values
const carStats = {
  horsepower: 400,
  weight: 3354,
};
