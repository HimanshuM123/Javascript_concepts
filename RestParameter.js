/*
ES6 Rest Parameter
The rest parameter is introduced in ECMAScript 2015 or ES6, which improves the ability to handle parameters. 
The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, 
a function can be called with any number of arguments.

Before ES6, the arguments object of the function was used. The arguments object is not an instance of the Array type. 
Therefore, we can't use the filter() method directly.

The rest parameter is prefixed with three dots (...). Although the syntax of the rest parameter 
is similar to the spread operator, it is entirely opposite from the spread operator. The rest parameter has to be the last argument because it is used to collect all of the remaining elements into an array.

node RestParameter.js
*/

function Sum(...args){
let sum =0;
for(let i of args){
    sum = sum +i;
}
console.log(sum);
}

Sum(10,20,30); //60

//Rest Parameters and Destructuring
console.log("==========================================")
var colors = ["Violet", "Indigo", "Blue", "Red", "Yellow"];  
var[a,b,...primaryColors] = colors;
console.log(a);//Violet
console.log(b);//Indigo
console.log(primaryColors);//[ 'Blue', 'Red', 'Yellow' ]




