let arr= [2,4,8,10]
let doubleArr =  arr.map(a => a*2)
console.log(doubleArr)//[ 4, 8, 16, 20 ]

let filteredArr = arr.filter(a => a>5);
console.log(filteredArr)//[ 8, 10 ]

let sum = arr.reduce((a,b) => a+b);
console.log(sum);