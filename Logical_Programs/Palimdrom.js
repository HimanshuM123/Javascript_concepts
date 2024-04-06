var testString ="abcdcba";


function isPalindrome(str) { 

    return str === str.split('').reverse().join(''); 
  
  }

  function isPalindrome2(str) { 

    let left =0;
    let right=str.length-1;

    while(left < right){
      if(str[left]!==str[right]){
        return false;
      }

      left++;
      right--;
    }
    return true;
  
  }

  //var result =isPalindrome(testString);
  var result =isPalindrome2(testString);

  if(result){
    console.log("The String is Palimdrom");
  }else{
    console.log("The String is NOT Palimdrom");
  }

