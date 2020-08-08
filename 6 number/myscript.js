// declarations
let int = 42;
let oct = 077;
let hex = 0xFF;
let bin = 0b1011;
let exp = 2e4;

console.log(int+" "+oct+" "+hex+" "+bin+" "+exp);
// output: 42  63  255  11  20000


// Number object
const mystr = '123.456';
let mynum = undefined/10;
console.log(Number.parseFloat(mystr));
console.log(Number.parseInt(mystr));
console.log(Number.isNaN(mynum));

// Math object
// degree to radian conversion
function degToRad(deg){
    return deg*(Math.PI/180);
}
console.log(degToRad(30));

//generating random numbers with range [min, max]
function randomGenerator(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomGenerator(3,8));
