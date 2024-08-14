// Declaring a variable

let firstName = 'Jessica';
// Variables use camelCase in Javascript as convention

// Declaring a Constant

const christmas_2024 = '25/12/2024';
const COLOR_GREEN = 'green';
// Constants in Javascript use as a convention UpperCase and snakeCase

// Declaring Strings -> use '', "" and ``

let favoriteFruit = 'strawberries';
let favoriteIceCream = "chocolate";
let favoriteProgrammingLanguage = `Javascript`

// Declaring Numbers

// int
let numberOfDonuts = 12;
//float
let pi = 3.14;
//big int use a 'n' at the end of number
let veryLargeNumber = 54354343363466n; 


// Declaring Booleans

let lovesCoding = true;
let hatesCoding = false;

// Declaring indefined variables

let favoritColor; // without the assignment the variable doesn't have a type
//console.log(favoritColor);

// Declaring nulls -> use to clean a value from a variable

favoriteFruit = null; 

// Declaring a symbol

const uniqueKey = Symbol(); //verify usages

//Declaring objects

let course = {
    name: 'Javascript for Beginners',
    hours: 3
};

// console.log(course);
// console.log(course.name);

course.name = 'Javascript Fundamentals';
// console.log(course['name']); // Another form to access the key value in the object besides .notation

let property = 'hours';
// console.log(course[property]); // Bracket notation is more used for when the value of key to access is not known


// Variables can be reasigned to other data types

let testOfType = 'Teste';
//console.log(typeof testOfType);

testOfType = 100;
// console.log(typeof testOfType);

testOfType = true;
// console.log(typeof testOfType);


let productColors = ['blue', 'green'];

productColors[0] = 42; // use bracket notation to access through the index

// console.log(productColors);

//console.log(productColors.length); // Function lenght to count the number of objects in the array


// FUNCTIONS

function sayHi(name) {
    console.log('Hi, ' + name);
}

// sayHi('Jessica');

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}

// console.log(multiply(2,2));

