let arr =["hello","world","java","hello","java"];

function countWorld(p){
    let count ={};
    p.forEach(item => {
        if(count[item]){
            count[item]++;
        }else{
            count[item]=1; 
        }
        
    });
    return count;
}

console.log(countWorld(arr));
//{ hello: 2, world: 1, java: 2 }

//https://blog.bitsrc.io/most-important-javascript-coding-challenge-aa14c956d2df