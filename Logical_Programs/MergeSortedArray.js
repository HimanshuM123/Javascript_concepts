var a = [1,3,5,7,9];
var b = [2,4,6,8,10];

function mergeSortedArrays(arr1, arr2) { 

    return [...arr1, ...arr2].sort((a, b) => a - b); 
  
  } 

  var finalArr =  mergeSortedArrays(a,b);
  console.log(finalArr)