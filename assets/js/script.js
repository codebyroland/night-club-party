let firstName = 'Roland';
let lastName = 'Ibiwoye';
let country = 'Mexico';
let city = 'Miami';
let age = 29;
let isMarried = true;

// Declaring variables with number values

const gravity = 5.2;
const bollingPoint = 200;

// Variables can also be declaring in one line seperated by coma

let name = 'samuel', 
job = 'freelancer',
location = 'United Kingdom'

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(age1);

// vs. expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1992)
console.log


const calcAge3 = birthYear => 2037 = birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const students = ["Elena", "Baris", "Maria", "Dave"]
for(let index = 0; index < students.length; index++)
