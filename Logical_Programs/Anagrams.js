var str1="abcdefg";
var str2="adefgcb";

function isAnagram(string1 ,string2){
let s1 = string1.split('').sort().join('');
let s2 = string2.split('').sort().join('');
return s1===s2;

}

var result = isAnagram(str1,str2);

if(result){
    console.log("The strings are anagrams");
}else{
    console.log("The strings are NOT anagrams"); 
}


