// declaring variables using var
var v = 'global';

if(true){
    var v = 'within if'; // gets overwrited cause it is function-scoped not block scoped
    console.log(v); // within if
}
console.log(v); // within if, will be updated


function foo() {
  // creates a function scope
  var x = 1;
  function bar() {
    // creates another function scope
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  //console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}
foo();


// declaring variables using let
let x = 1;
if (x === 1) {
  let x = 2; // let creates a new block scope

  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable, different block-scope
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
letTest();


// declaring constants
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
}
console.log(number);
// expected output: 42


// var vs let
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable! gets overwritten
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}



// variable hoisting
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}

function not_hoisted() {
  console.log(foo); // ReferenceError
  let foo = 111;
  console.log(foo); // 111
}
