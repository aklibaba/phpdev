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

jsonData = JSON.parse(data);

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
      const searchedBook = this.inventory.find( book => book.title === title);

      if(searchedBook) return searchedBook.price;
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

user1 = createAdminUser();
console.log(user1);