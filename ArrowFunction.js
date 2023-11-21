function square(a){
    return a*a;
};

const sq = square(5);
console.log("The Square is",sq);

var sq_1 = (a)=> {return a*a};
console.log(sq_1(6))


function test(){
   // console.log(this);
}

test();

let factory = {
    items: [5, 1, 12],
    double: function(){
        return this.items.map(function(item, index){
            let value = item*2;
            console.log(`${value} is the double of ${this.items[index]}`);
            return value;
        });
    }
};

//factory.double();
/*
Uncaught TypeError: Cannot read property '0' of undefined
    at <anonymous>
    at Array.map (<anonymous>)
*/

let factory2 = {
    items: [5, 1, 12],
    double: function(){
        return this.items.map((item, index) => {
            let value = item*2;
            console.log(`${value} is the double of ${this.items[index]}`);
            return value;
        });
    }
};

factory2.double();