const userDetails = {
    name: "John Doe",
    age: 14,
    verified: false
  };
// Cloning the Object with Spread Operator
let cloneUser = { ...userDetails };

console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}

// Cloning the Object with Object.assign() Method
let cloneUser2 = Object.assign({}, userDetails);

console.log(cloneUser2); // {name: 'John Doe', age: 14, verified: false}

// Cloning the Object with JSON.parse() Method
let cloneUser3 = JSON.parse(JSON.stringify(userDetails));

console.log(cloneUser3); // {name: 'John Doe', age: 14, verified: false}