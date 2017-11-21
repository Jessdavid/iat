const forEach = require('lodash/forEach');

const newArray = [1, 2, 34, 4, 5];

forEach(newArray, value => console.log(value));

const sum = newArray.reduce((sum, value) => sum + value);

console.log('New Array Sum:', sum);

const numbers = process.argv.splice(2);
console.log(numbers);
let initialValue = 0

const adder = value => {
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
        debugger;
        newNumber = parseInt(numbers[i], 10);
        console.log('newNuber:', newNumber);
        initialValue += newNumber;
    }
}


adder(numbers);
console.log('sum:', initialValue);