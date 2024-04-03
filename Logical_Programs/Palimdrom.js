var testString ="abcdcba";


function isPalindrome(str) { 

    return str === str.split('').reverse().join(''); 
  
  }

  var result =isPalindrome(testString);

  if(result){
    console.log("The String is Palimdrom");
  }else{
    console.log("The String is NOT Palimdrom");
  }

