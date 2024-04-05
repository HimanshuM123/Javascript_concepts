let arr =[1,1,2,2,3,3,4,4,5,5];

function uniqueElements(ar){
return [... new Set(arr)];
}

var result = uniqueElements(arr);

console.log(result);