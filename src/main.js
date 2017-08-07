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

let device_id = '12432';
let guid = 'ascg';
const username = 'alexos';

const data = `{
"device_id" : ${device_id},
"guid" : "${guid}",
"username" : "${username}"
}`;

let jsonData = JSON.parse(data);

console.log(jsonData);

//code for arrow functions

const add = (a, b) => a + b;


const double = number => 2 * number;
console.log(double(1));


let doubledNumbersArr = numbers.map(number => 2 * number);

console.log(doubledNumbersArr);

const team = {
  members: ['Jane', 'Bill'],
  teamName: "DP Team",
  teamSummary: function () {
    return this.members.map(member => `${member} is on team ${this.teamName}`)
  }
};

let teamSummaryArr = team.teamSummary();

// console.log(teamSummaryArr);

function createBookshop(inventory) {
  return {
    inventory,
    inventoryValue () {
      return this.inventory.reduce((accum, curr) => {
        return accum + curr.price;
      }, 0);
    },
    priceForTitle (title) {
      const searchedBook = this.inventory.find(book => book.title === title);

      if (searchedBook) return searchedBook.price;
      else return 'no such book found';
    }
  }
}

const inventory = [
  {"title": 'Harry Potter', price: 10},
  {"title": 'ES6 Practice', price: 16},
];

const bookShop = createBookshop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

// function saveFile(url, data) {
//   $.ajax({
//     method: 'POST',
//     url,
//     data
//   });
// }

const url = "http://fileupload.com";
// saveFile(url, data);

//code for default function arguments

function makeAjaxRequest(url, method = 'GET') {

  return method;
  //logic to make the request

}

console.log(makeAjaxRequest('google.com', null));

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999990;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}


//code for rest and spread


//rest
function addNumbers(...numbers) {
  return numbers.reduce((accum, curr) => accum + curr);
}

// let addedNumbers = addNumbers([1,2,3,4,5,6]);

// console.log(addedNumbers);

const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];

const jointColors = ['green', ...defaultColors, 'blue', ...userFavouriteColors];

console.log(jointColors);

const jointColors2 = addNumbers(userFavouriteColors);

function validateShoppingList(...items) {
  if (items.find(item => item === 'milk')) {
    return items;
  } else {
    return [...items, 'milk'];
  }
}

console.log(validateShoppingList('oranges', 'bread', 'milk'));

const MathLibrary = {
  calculateproduct(...rest) {
    // console.log('please use the multiply method');
    return this.multiply(...rest);
  },
  multiply(...rest) {
    return rest.reduce((accum, curr) => accum * curr, 1)
  },

};

console.log(MathLibrary.calculateproduct(2, 3));

//code for destructuring

//ES5


// var type = expense.type;
// var amount = expense.amount;

//ES6
const expense = {
  typeOfBusiness: 'Business',
  amount: '45PLN'
};

const {typeOfBusiness, amount} = expense;
console.log(typeOfBusiness);
console.log(amount);

//ES5
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14098
};

function fileSummary({name, extension, size}) {
  return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));


const techCompanies = [
  'Google',
  'Facebbok',
  'Companies'
];

const [comp1, , comp2, ...rest] = techCompanies;

console.log(comp1);
console.log(comp2);
console.log(rest);


function logCompanies([first, second, third]) {

}

let arrayOfCompanies = [
  {name: 'Google', city: 'Mountain View'},
  {name: 'Facebook', city: 'Menlo Park'},
  {name: 'Uber', city: 'Downtown San Francisco'},
];

// var location = arrayOfCompanies[0].location;

const [{city: alexCity}] = arrayOfCompanies;
console.log('alexCity' + alexCity);

const Google = {
  locations: [
    'Mountain View',
    'New York',
    'London'
  ]
};


// const [{locations}] = Google;
// const [cityOfComp] = googleLocations;

// console.log(locations);

function signUp({username = 'alex', password, email, dateOfBirth, city}) {
  console.log(username);
}

//lots of other code

var o = {p: 42, q: true};
var {p: alex, q: lukasz} = o;
console.log(alex);
console.log(lukasz);


const user = {
  password: '123QWEasd',
  email: 'alejandro.moloniewicz@gmail.com',
  dateOfBirth: '1987-06-05',
  city: 'Warsaw'
};

// signUp(user);

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];


const coords = points.map(([x, y]) => {
  return {x, y}
});

const [[x, y]] = points;
console.log('x', x);
console.log(y);
console.log(coords);

const numbers1 = [1, 2, 4, 6];


function double2(numbersArr) {
  const [number, ...rest] = numbersArr;
  if (!number) {
    return [];
  }
  return [number * 2, ...double2(rest)];
}

console.log(double2(numbers1));

let emptyArr = [];
const test = [1, 2, ...emptyArr];
console.log(test);

function fibb() {

}

//ES5 prototypal inheritance
// function Car(options) {
//   this.title = options.title;
// }
//
// Car.prototype.drive = function () {
//   return 'vroom';
// };


// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//   return 'beep';
// };

// const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
// console.log(toyota);

//ES6 class inheritance
class Car {
  title;
  driver;

  constructor({title = 'Toyota'} = {}) {
    this.title = title;
  }

  assignDriver(driver) {
    this.driver = driver;
  }


  drive() {
    return 'broom';
  }
}

class Toyota extends Car {

  color;

  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    super.assignDriver('alex');
    return 'beeep';
  }
}

const car = new Car();
// console.log(car.drive());

const toyota = new Toyota({color: 'red', title: "Yaris"});
console.log(toyota.honk());
console.log(toyota.driver);

//Using for ... of loops

const colors3 = ['red', 'green', 'blue'];

for (let color of colors3) {
  console.log(color);
}

const numbers4 = [1, 2, 5, 6];

let total4 = 0;
for (let number of numbers4) {
  total4 += number;
}

console.log(total4);

//ES6 Generators
// function* numbers3() {
//
// }

// console.log(numbers3());

//promises

const resolver = (resolve, reject) => {
  console.log('first statement in promise');
  setTimeout(() => reject('alex'), 3000);
  console.log('second statement in promise');


};

// const promise = new Promise(resolver);
//
// promise
//   .then((value) => console.log(`promise resolved with ${value}`))
//   .then((value) => console.log('I was also ran'))
//   .catch((value) => console.log('something went wrong', value));


fetch('https://jsonplaceholder.typicode.com/posts452')
  .then(response => {return response.json() } )
  .then(data => console.log(data[1]) )
  .catch(error => console.log('BAD', error));