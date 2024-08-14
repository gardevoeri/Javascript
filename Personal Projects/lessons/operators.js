let a = 2;
let b = '2';

// Loose Equality
// console.log(a == b); // Compares different data types as truthy

// Strict Equality
// console.log(a === b); // Compares only the same data type as true

// Ternary Operator

let age = 16;
const canDrive = age >= 16 ? true: false;
// console.log(canDrive);

let points = 110;
const customerType = points > 100 ? 'gold': 'silver';
// funciona quase como um if statement de uma linha só pra associar valores pre-determinados a uma variável
// console.log(customerType);


// LOGICAL OPERATORS

// or is -> || 
// and is -> &&
// not is -> ! (used to return the inverse of the boolean value) 
// if a value is null of undefined -> ??

let y = null;
const yResult = y ?? false;

// console.log(yResult);

// this is actualy sintactic sugar, the complete expression would be:

let z = null;
const zResult = (z !== null && z !== undefined) ? z : false;