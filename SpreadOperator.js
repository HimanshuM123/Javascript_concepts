/*
ES6 introduced a new operator referred to as a spread operator, 
which consists of three dots (...). It allows an iterable to expand in places where more than zero arguments are expected. 
It gives us the privilege to obtain the parameters from an array.

Spread operator syntax is similar to the rest parameter, but it is entirely opposite of it. 
Let's understand the syntax of the spread operator.

node SpreadOperator.js
*/
let colors =['Red','Yellow','Blue'];
let newColors = [...colors,'Voilet','Gray','Green'];
console.log(newColors);//[ 'Red', 'Yellow', 'Blue', 'Voilet', 'Gray', 'Green' ]

let copy = [...colors];
console.log("Coplied colors",copy);//Coplied colors [ 'Red', 'Yellow', 'Blue' ]
console.log("==========================================")

//Without using spread operator

let cities =['Mumbai','New York','London'];
let newCities = cities;
newCities.push('Bijing');
console.log('cities',cities); //cities [ 'Mumbai', 'New York', 'London', 'Bijing' ]  
console.log('newCities',newCities);//newCities [ 'Mumbai', 'New York', 'London', 'Bijing' ] 
console.log("==========================================")
// using spread operator
let cities_1 =['Mumbai','New York','London'];
let newCities_1 = [...cities_1];
newCities_1.push('Bijing');
console.log('cities_1',cities_1); //cities_1 [ 'Mumbai', 'New York', 'London' ]
console.log('newCities_1',newCities_1); //newCities_1 [ 'Mumbai', 'New York', 'London', 'Bijing' ]

//Strings
let vowels =['A',...'EIO','U'];
console.log(vowels);//[ 'A', 'E', 'I', 'O', 'U' ]

