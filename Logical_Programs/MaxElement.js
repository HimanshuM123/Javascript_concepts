let arr =[4,8,100,1,3,5,6,8];

let max = arr[0];

for(let i =1; i< arr.length;i++){
    if(arr[i]> max){
        max = arr[i];
    }
}

console.log(max);//100