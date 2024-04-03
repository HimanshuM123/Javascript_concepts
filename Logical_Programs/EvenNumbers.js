let nums =[1,2,3,4,5,6,7,8,9,10];

function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }

  var result = filterEvenNumbers(nums);

  console.log(result);