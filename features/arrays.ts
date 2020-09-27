const carMakers = ['ford', 'toyota', 'chevy'];

// Complex Objects
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // No because carMakers is array of strings

// Help with 'map'
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = []; // Only want to use annotation if you do not initialize array
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100); // No
