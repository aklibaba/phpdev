/**
 * Created by SAMSUNG on 01.06.2017.
 */
var colors = ['red', 'blue', 'yellow'];

colors.forEach(function (color) {
  console.log(color);
});

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(adder);

function adder(p1, p2, p3) {
  sum += p1;
}

// console.log(sum);

/**
 * Code for Map function
 * @type {[*]}
 */
var numbers = [1, 2, 3];
var doubled = numbers.map(function (p1, p2, p3) {
  return p1 * 2;
});
console.log(doubled);


var cars = [
  {model: "Ford", price: 200},
  {model: "Opel", price: 150},

];

/**
 *
 * @type {Array}
 */
var prices = cars.map(function (p1, p2, p3) {
  return p1.price;
});

console.log(prices);

//code for filter
var products = [
  {name: "banana", type: "fruit", quantity: 0, price: 21},
  {name: "apple", type: "fruit", quantity: 10, price: 22},
  {name: "lettuce", type: "vegetable", quantity: 5, price: 45},
  {name: "broccoli", type: "vegetable", quantity: 9, price: 8}
];

var onlyVegs = products.filter(function (p1, p2, p3) {
  return p1['type'] === "vegetable" &&
  p1['quantity'] > 0 &&
  p1['price'] < 40
});

function logItems(array) {
  array.forEach(function (p1, p2, p3) {
    console.log(p1);
  })
}
logItems(onlyVegs);