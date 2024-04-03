(function(){
    console.log("first IIFE");
})();

console.log("==================================");
(function(x,y,z){
console.log(x);
console.log(y);
console.log(z);
})(1,2,3);
console.log("==================================");

(function(){
    let userName="Steve";
    function display(name){
        console.log("The name is "+name);
    }
    display(userName); //The name is Steve
})();
console.log("==================================");