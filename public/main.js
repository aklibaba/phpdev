'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var cars = [{ model: "Ford", price: 200 }, { model: "Opel", price: 150 }];

/**
 *
 * @type {Array}
 */
var prices = cars.map(function (p1, p2, p3) {
  return p1.price;
});

console.log(prices);

//code for filter
var products = [{ name: "banana", type: "fruit", quantity: 0, price: 21 }, { name: "apple", type: "fruit", quantity: 10, price: 22 }, { name: "lettuce", type: "vegetable", quantity: 5, price: 45 }, { name: "broccoli", type: "vegetable", quantity: 9, price: 8 }];

var onlyVegs = products.filter(function (p1, p2, p3) {
  return p1['type'] === "vegetable" && p1['quantity'] > 0 && p1['price'] < 40;
});

function logItems(array) {
  array.forEach(function (p1, p2, p3) {
    console.log(p1);
  });
}
logItems(onlyVegs);

var device_id = '12432';
var guid = 'ascg';
var username = 'alexos';

var data = '{\n"device_id" : ' + device_id + ',\n"guid" : "' + guid + '",\n"username" : "' + username + '"\n}';

var jsonData = JSON.parse(data);

console.log(jsonData);

//code for arrow functions

var add = function add(a, b) {
  return a + b;
};

var double = function double(number) {
  return 2 * number;
};
console.log(double(1));

var doubledNumbersArr = numbers.map(function (number) {
  return 2 * number;
});

console.log(doubledNumbersArr);

var team = {
  members: ['Jane', 'Bill'],
  teamName: "DP Team",
  teamSummary: function teamSummary() {
    var _this = this;

    return this.members.map(function (member) {
      return member + ' is on team ' + _this.teamName;
    });
  }
};

var teamSummaryArr = team.teamSummary();

// console.log(teamSummaryArr);

function createBookshop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function inventoryValue() {
      return this.inventory.reduce(function (accum, curr) {
        return accum + curr.price;
      }, 0);
    },
    priceForTitle: function priceForTitle(title) {
      var searchedBook = this.inventory.find(function (book) {
        return book.title === title;
      });

      if (searchedBook) return searchedBook.price;else return 'no such book found';
    }
  };
}

var inventory = [{ "title": 'Harry Potter', price: 10 }, { "title": 'ES6 Practice', price: 16 }];

var bookShop = createBookshop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

// function saveFile(url, data) {
//   $.ajax({
//     method: 'POST',
//     url,
//     data
//   });
// }

var url = "http://fileupload.com";
// saveFile(url, data);

//code for default function arguments

function makeAjaxRequest(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';


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

function createAdminUser() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new User(generateId());

  user.admin = true;

  return user;
}

//code for rest and spread


//rest
function addNumbers() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (accum, curr) {
    return accum + curr;
  });
}

// let addedNumbers = addNumbers([1,2,3,4,5,6]);

// console.log(addedNumbers);

var defaultColors = ['red', 'green'];
var userFavouriteColors = ['orange', 'yellow'];

var jointColors = ['green'].concat(defaultColors, ['blue'], userFavouriteColors);

console.log(jointColors);

var jointColors2 = addNumbers(userFavouriteColors);

function validateShoppingList() {
  for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    items[_key2] = arguments[_key2];
  }

  if (items.find(function (item) {
    return item === 'milk';
  })) {
    return items;
  } else {
    return [].concat(items, ['milk']);
  }
}

console.log(validateShoppingList('oranges', 'bread', 'milk'));

var MathLibrary = {
  calculateproduct: function calculateproduct() {
    // console.log('please use the multiply method');
    return this.multiply.apply(this, arguments);
  },
  multiply: function multiply() {
    for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      rest[_key3] = arguments[_key3];
    }

    return rest.reduce(function (accum, curr) {
      return accum * curr;
    }, 1);
  }
};

console.log(MathLibrary.calculateproduct(2, 3));

//code for destructuring

//ES5


// var type = expense.type;
// var amount = expense.amount;

//ES6
var expense = {
  typeOfBusiness: 'Business',
  amount: '45PLN'
};

var typeOfBusiness = expense.typeOfBusiness,
    amount = expense.amount;

console.log(typeOfBusiness);
console.log(amount);

//ES5
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14098
};

function fileSummary(_ref) {
  var name = _ref.name,
      extension = _ref.extension,
      size = _ref.size;

  return 'The file ' + name + '.' + extension + ' is of size ' + size;
}

console.log(fileSummary(savedFile));

var techCompanies = ['Google', 'Facebbok', 'Companies'];

var comp1 = techCompanies[0],
    comp2 = techCompanies[2],
    rest = techCompanies.slice(3);


console.log(comp1);
console.log(comp2);
console.log(rest);

function logCompanies(_ref2) {
  var _ref3 = (0, _slicedToArray3.default)(_ref2, 3),
      first = _ref3[0],
      second = _ref3[1],
      third = _ref3[2];
}

var arrayOfCompanies = [{ name: 'Google', city: 'Mountain View' }, { name: 'Facebook', city: 'Menlo Park' }, { name: 'Uber', city: 'Downtown San Francisco' }];

// var location = arrayOfCompanies[0].location;

var alexCity = arrayOfCompanies[0].city;

console.log('alexCity' + alexCity);

var Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// const [{locations}] = Google;
// const [cityOfComp] = googleLocations;

// console.log(locations);

function signUp(_ref4) {
  var _ref4$username = _ref4.username,
      username = _ref4$username === undefined ? 'alex' : _ref4$username,
      password = _ref4.password,
      email = _ref4.email,
      dateOfBirth = _ref4.dateOfBirth,
      city = _ref4.city;

  console.log(username);
}

//lots of other code

var o = { p: 42, q: true };
var alex = o.p,
    lukasz = o.q;

console.log(alex);
console.log(lukasz);

var user = {
  password: '123QWEasd',
  email: 'alejandro.moloniewicz@gmail.com',
  dateOfBirth: '1987-06-05',
  city: 'Warsaw'
};

signUp(user);

var points = [[4, 5], [10, 1], [0, 40]];

var coords = points.map(function (_ref5) {
  var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
      x = _ref6[0],
      y = _ref6[1];

  return { x: x, y: y };
});

var _points$ = (0, _slicedToArray3.default)(points[0], 2),
    x = _points$[0],
    y = _points$[1];

console.log(coords);

var numbers1 = [1, 2, 4, 6];

function double2(numbersArr) {
  var _numbersArr = (0, _toArray3.default)(numbersArr),
      number = _numbersArr[0],
      rest = _numbersArr.slice(1);

  if (!number) {
    return [];
  }
  return [number * 2].concat((0, _toConsumableArray3.default)(double2(rest)));
}

console.log(double2(numbers1));

var emptyArr = [];
var test = [1, 2].concat(emptyArr);
console.log(test);

function fibb() {}

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

var Car = function () {
  function Car() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$title = _ref7.title,
        title = _ref7$title === undefined ? 'Toyota' : _ref7$title;

    (0, _classCallCheck3.default)(this, Car);

    this.title = title;
  }

  (0, _createClass3.default)(Car, [{
    key: 'assignDriver',
    value: function assignDriver(driver) {
      this.driver = driver;
    }
  }, {
    key: 'drive',
    value: function drive() {
      return 'broom';
    }
  }]);
  return Car;
}();

var Toyota = function (_Car) {
  (0, _inherits3.default)(Toyota, _Car);

  function Toyota(options) {
    (0, _classCallCheck3.default)(this, Toyota);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Toyota.__proto__ || (0, _getPrototypeOf2.default)(Toyota)).call(this, options));

    _this2.color = options.color;
    return _this2;
  }

  (0, _createClass3.default)(Toyota, [{
    key: 'honk',
    value: function honk() {
      (0, _get3.default)(Toyota.prototype.__proto__ || (0, _getPrototypeOf2.default)(Toyota.prototype), 'assignDriver', this).call(this, 'alex');
      return 'beeep';
    }
  }]);
  return Toyota;
}(Car);

var car = new Car();
// console.log(car.drive());

var toyota = new Toyota({ color: 'red', title: "Yaris" });
console.log(toyota.honk());
console.log(toyota.driver);

//Using for ... of loops

var colors3 = ['red', 'green', 'blue'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)(colors3), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var color = _step.value;

    console.log(color);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var numbers4 = [1, 2, 5, 6];

var total4 = 0;
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = (0, _getIterator3.default)(numbers4), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var number = _step2.value;

    total4 += number;
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log(total4);

//ES6 Generators
// function* numbers3() {
//
// }

// console.log(numbers3());