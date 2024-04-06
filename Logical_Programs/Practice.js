let arr =["hello","world","java","hello","java"];


 function freq(ar){

    let myObj ={};

    ar.forEach(ele => {
        if(myObj[ele]){
            myObj[ele]++;
        }else{
            myObj[ele]=1; 
        }

    });

    return myObj;
}



console.log(freq(arr));
