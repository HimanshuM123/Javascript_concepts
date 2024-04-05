//3rd largest element
var k =3;
let arr =[12,17,3,90,67,18,29,10];

let sorted = arr.sort((a,b)=> b-a);
console.log(sorted)

let kthLargest = sorted[k-1]
console.log(kthLargest);