let arr =[1,2,3,4,3,6,5,4];

function unique (arr){
    let items ={};
    arr.forEach((item)=>{
        if(!items[item])  {
            items[item]=item;
        }
    })
  return Object.values(items);
  
}

function unique2 (arr){
    let items =[];
    arr.forEach((item)=>{
        if(!items[item])  {
            items.push(item);
        }
    })
  return items;
  
}

console.log(unique2(arr));