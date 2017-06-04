/**
 * Created by SAMSUNG on 01.06.2017.
 */
var colors = [ 'red', 'blue', 'yellow' ];

colors.forEach(function (color) {
    // console.log(color);
});

var numbers = [ 1, 2, 3, 4, 5 ];

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
var numbers = [ 1, 2, 3 ];
var doubled = numbers.map(function (p1, p2, p3) {
    return p1 * 2;
});
// console.log(doubled);


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

// console.log(prices);

//code for filter
var products = [
    {name: "banana", type: "fruit", quantity: 0, price: 21},
    {name: "apple", type: "fruit", quantity: 10, price: 22},
    {name: "lettuce", type: "vegetable", quantity: 5, price: 45},
    {name: "broccoli", type: "vegetable", quantity: 9, price: 8}
];

var onlyVegs = products.filter(function (p1, p2, p3) {
    return p1[ 'type' ] === "vegetable" &&
      p1[ 'quantity' ] > 0 &&
      p1[ 'price' ] < 40
});

function logItems(array) {
    array.forEach(function (p1, p2, p3) {
        console.log(p1);
    })
}
// logItems(onlyVegs);

let post = {id: 4, title: 'New York'};

let comments = [
    {postId: 4, content: 'something about New York'},
    {postId: 3, content: 'Great stuff'},
    {postId: 4, content: 'Smyk in Warsaw'},
];

/**
 *
 * @param {Object} post
 * @param {Array} commentsArray
 * @returns Array
 */
function commentsForPost(post, commentsArray) {
    return commentsArray.filter(function (comment, i) {
        return comment.postId === post.id;
    })
}

logItems(commentsForPost(post, comments));

/* Code for Array.prototype.find */


// for ( let i = 0; i < comments.length; i++ ) {
//     if ( comments[ i ].postId === 4 ) {
//         var comment4 = comments[ i ];
//         break;
//     }
// }


var comment4 = comments.find(function (p1) {
    return p1.postId === 4
});

console.log(comment4);

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Dodge'),
    new Car('Focus'),
    new Car('Yaris')
];


let focus = cars.find(function (p1) {
    return p1.model === 'Focus';
});

// console.log(focus);

var posts = [
    {id: 1, title: "New York"},
    {id: 2, title: "Boston"},
];

var comment = {
    postId: 1,
    content: "Great post about Ne York"
};

function postForComment(comment, postsArray) {
    return postsArray.find(function (p1) {
        return p1.id === comment.postId;
    })
}

var postForComment1 = postForComment(comment, posts);

// console.log(postForComment1);

var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'HP', ram: 32},
];

//do you have any computer that can run the program (ram > 16)

let allComputersCapable = computers.every(function (p1) {
    return p1.ram > 16;
});
let someComputersCapable;

function someAndEvery(array, type, condition) {
    if ( type === 'every' ) {
        return array.every(function (p1) {
            return condition(p1);
        })
    }
    else if ( type === 'some' ) {
        return array.some(function (p1) {
            return condition(p1);
        })
    }
}

// console.log(someAndEvery(computers, 'some', function(elem) {
//     return elem.ram >= 32;
// }));

var names = [
    'Alex',
    'Matthew',
    'Peter',
    'George'
];

someMoreThan4Chars = names.some(function (p1) {
    return p1.length > 4;
});

// console.log(someMoreThan4Chars);


function Field(value, type) {
    this.value = value;
    this.type = type;
}

Field.prototype.validate = function () {
    if ( this.value.length > 0 ) {
        return true
    }
    else {
        this.showErrorMessage('field is required');
    }
    return this.value.length > 0;
};

Field.prototype.showErrorMessage = function (error) {
    // this[ 'node' ].findNode('.error-box').innerHTML = error.message;
    console.log(`${this.type} ${error}`);
};

let username = new Field('', 'name');
let password = new Field('123QWEasd', 'password');
let birthdate = new Field('13/05/1977', 'birthdate');

// let userValidated = username.validate() && password.validate();

var fields = [
    username,
    password,
    birthdate
];

let userValidated = fields.every(function (p1) {
    return p1.validate()
});

// console.log(userValidated);

if ( userValidated ) {
    //allow user to submit
}
else {
    //show error message on invalid field
}

//cod for reduce

var numbers = [ 1, 2, 3, 5, 10 ];
var sum = 0;

for ( var i = 0; i < numbers.length; i++ ) {
    sum += numbers[ i ];
}


var reduceSum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});

console.log(reduceSum);

var primaryColors = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'},
];

newArrOfColors = primaryColors.reduce(function (acc, curr) {
    acc.push(curr.color);
    return acc;
}, []);

console.log(newArrOfColors);

/**
 *
 * @param {String} string
 * @returns {*}
 */
function balancedParens(string) {
    let countOpened = 0;
    let countClosed = 0;
    
    let arrFromString = string.split('');
    
    let isBalanced = arrFromString.reduce(function (accum, curr, i, arr) {
        
        
        if ( curr === '(' ) {
            countOpened++;
            countClosed = 0;
    
            //check whent the last element in aray is open paren
            if(arr.length === i + 1) {
                return false;
            }
        }
        if ( curr === ')' ) {
            countClosed++;
            
            if ( countClosed === countOpened ) {
                countClosed = 0;
                countOpened = 0;
            }
            else if ( countClosed > countOpened ) {
                return false;
            }
        }
        
        return accum && !!curr;
        
    }, true);
    return isBalanced;
}

var isBalanced = balancedParens("(())()()");

console.log(isBalanced);