// task 1
const celsium = 30;

const fahrenheit = (9 / 5) * celsium + 32;

console.log(fahrenheit);

// task 2

const daysInMonth = 31;

const hoursInMonth = daysInMonth * 24;

const minutesInMonth = 60 * hoursInMonth;

console.log(minutesInMonth);

// task 3

let health = 100;

let stamina = 100;

health = health - 10;

stamina -= 10;

console.log(health, stamina);

// task 4

const totalPrice = 1200;
const discount = 0.10;
const discountedPrice = totalPrice * discount;
console.log(discountedPrice);

// task 5

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// task 6 

const floatString = "45.67";

const parsedFloat = parseFloat(floatString);

console.log(parsedFloat);

// task 7

const intSring = "123.9133";

const parsedInt = parseInt(intSring);

console.log(parsedInt);


// task 8 
const number = 16;

const sqrtNumber = Math.sqrt(number);

console.log(sqrtNumber);

// task 9

const bigestNumber = Math.max(2, 34, 99, 3, 22, 36, 733, 18);

console.log(bigestNumber);

const smalerNumber = Math.min(2, 34, 99, 3, 22, 36, 733, 18);

console.log(smalerNumber);

// task 10

const random = Math.random() * (19 - 3) + 3;

console.log(random);
console.log(Math.round(random));



