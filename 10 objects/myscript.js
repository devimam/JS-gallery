// object literal
var obj_literal={
    key1: 'named key',
    1: 'integer key',
    "key2": 'string key'
};

for(let prop in obj_literal){
    console.log(obj_literal[prop]);
}

// object declaration
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

for(let prop in myCar){
    console.log(myCar[prop]);
}

// function constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);

for(let prop in mycar){
    console.log(mycar[prop]);
}


// accessing object properties
console.log(myCar.model);
var k='make';
console.log(myCar[k]);
console.log(myCar['year']);


// defining object methods
var obj1 = {
    key1: function (p1=1, p2=1){
        return p1*p2;
    },
    key2: 100
};

console.log(obj1.key1(10,5));

// ---------------------------------
var obj2 = new Object();
obj2.key1 = function (p1=1, p2=1){
    return p1*p2;
};
obj2.key2 = 100;

console.log(obj2.key1(10,5));

//---------------------------------
function ObjectFn(k1, k2){
    this.key1 = k1;
    this.key2 = k2;
}

function method(p1=1, p2=1){
    return p1*p2;
}

var obj3 = new ObjectFn(method, 100);
console.log(obj3.key1(10, 5));
