// IF Statements

// let hour = 15;
// if (hour >= 6 && hour <= 12) {
//     console.log('Serving Breakfast');
// } else if (hour > 12 && hour <= 14) {
//     console.log('Serving Lunch');
// } else {
//     console.log('Serving Dinner');
// }

// If there's only one line of code inside the IF Statement the {}  are not necessary

// Switch Case Statement

let job = "Sales"

// switch (job) {
//     case 'Software Developer':
//         console.log('Writes Code');
//         break;
//     case 'Designer':
//         console.log('Makes User Interface');
//         break;
//     case 'Cloud Engineer':
//         console.log('Manages and Deploy Resources')
//         break;
//     default: 
//         console.log('Works With Customers');
// }

// FOR LOOPS

let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


// WHILE LOOPS

// let i = 0; 
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// let sum = 0;
// while (true) {
//     console.log('Loop');
//     sum++;

//     if (sum === 10)
//         break;
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);


// FOR-IN LOOPS

const course = {
    name: 'Javascript 101',
    duration: 3,
    sections: 7
}

// for (const key in course) {
//     console.log(course[key]);
// }

// FOR-OF LOOP

// for (let element of numbers) {
//     console.log(element);
// }

// BREAK and CONTINUE

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // exit the loop when i is 5
//     }
//     console.log(i);
// }


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip the loop when i is 5
    }
    console.log(i);
}
