// function declaration
function myfn(p1, p2){
    console.log(p2);
    return p1*10;
}
console.log(myfn(8, 'abc'));


// function expression
function multiplier_factory(multiplier){
    var fnexpr = function (value){
        return multiplier*value;
    };
    return fnexpr;
}

var _3multiplier = multiplier_factory(3);
console.log(_3multiplier);
console.log(_3multiplier(8));


// IIFE
var param=100;
(function (p1){
    var privatevar='abcd';
    console.log(p1); // 100
    console.log(privatevar); // abcd
})(param);
//console.log(privatevar); // ReferenceError - can't access this varaible


// arrow function
var a = ['Hydrogen','Helium','Lithium','Beryllium'];

var a2 = a.map(function(s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]


// function hoisting
// function declaration gets hoisted
foo(); // "bar"
function foo() {
    console.log('bar');
}

// function expression won't be hoisted
//baz(); // TypeError: baz is not a function

var baz = function() {
    console.log('bar2');
};


// function scope
// The following variables are defined in the global scope
var num1 = 20, num2 = 3, name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}
multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2, num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}
console.log(getScore()); // Returns "Chamahk scored 5"


// nested function - closure
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)


// argument object
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
// returns "red, orange, blue, "
console.log(myConcat(', ', 'red', 'orange', 'blue'));


// default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5
