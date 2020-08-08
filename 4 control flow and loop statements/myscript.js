// if ... else statement
var book = "maths";
if( book == "history" ){
   document.write("<b>History Book</b>");
}
else if( book == "maths" ){
   document.write("<b>Maths Book</b>");
}
else if( book == "economics" ){
   document.write("<b>Economics Book</b>");
}
else{
   document.write("<b>Unknown Book</b>");
}


// switch statement
var grade = 'A';
document.write("Entering switch block<br />");

switch (grade)
{
   case 'A':
        document.write("Good job<br />");
   		break;
   case 'F':
        document.write("Failed<br />");
   		break;
   default:
        document.write("Unknown grade<br />");
}

document.write("Exiting switch block");


// throw statement
// throw 'Error2';   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw {toString: function() { return "I'm an object!"; } };


// try...catch statement
function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false


// for loop
var count;
document.write("Starting Loop" + "<br />");

for(count = 0; count < 10; count++){
   document.write("Current Count : " + count );
   document.write("<br/>");
}

document.write("Loop stopped!");


// do ... while statement
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


// while statement
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}

// break statements
var x = 1;
document.write("Entering the loop<br/> ");

while (x < 20)
{
	if (x == 5){
	   break; // breaks out of loop completely
	}
	x = x + 1;
	document.write( x + "<br />");
}
document.write("Exiting the loop!<br /> ");


// continue statements
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12


// for...in statement
var arr=['item0','item1','item2'];

for(let ind in arr){
    console.log(ind+" => "+arr[ind]); ///iterates over property names
}
