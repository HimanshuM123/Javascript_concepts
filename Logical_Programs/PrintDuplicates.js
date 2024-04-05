let arr =[1,1,6,3,9,2,9,0,5,0];

function printDuplicates(ar){
let result = ar.filter((item,index)=>{
    return ar.indexOf(item)!== index;
});
return result ;

}

console.log(printDuplicates(arr));//[ 1, 9, 0 ]