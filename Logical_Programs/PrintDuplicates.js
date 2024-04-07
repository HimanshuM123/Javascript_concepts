let arr =[1,1,6,3,9,2,9,0,5,0];

function printDuplicates(ar){
let result = ar.filter((item,index)=>{
    return ar.indexOf(item)!== index;
});
return result ;

}

function printDuplicates2(ar){

    let mySet ={};
    let res =[];

    ar.forEach((item)=>{
        if(mySet[item]===1){
            res.push(item);
            mySet[item]++;
        }else{
            mySet[item]=1;
        }
    })
return res;
}

console.log(printDuplicates(arr));//[ 1, 9, 0 ]