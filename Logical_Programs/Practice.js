let arr =[1,1,6,3,9,2,9,0,5,0,1];


function printDuplicates(ar){

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

var result  = printDuplicates(arr);

console.log(result)