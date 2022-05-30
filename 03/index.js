// Number Type data Types 

const num = 120; 

// boolean type data types 
let bool = false;
bool = true;

// string type data types

const str = "String"; 


// undefined
let Number; 
console.log(Number)


// null
let obj = null;
console.log(typeof obj); 


//Nan
console.log('a'/2); // NaN;


//Symbol type
let s1 = Symbol();
console.log(s1); 

//bigint 
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'


// Object

//1. 

let emptyObject = {};

//2. 

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// 3.

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}