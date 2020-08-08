// creating strings
const str1 = 'string literal';
const str2 = "string literal";
const str3 = new String('string object');
// JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object.

console.log(str1); // literal
console.log(str2); // literal
console.log(str3); // object


// String Object property - length
const hello = 'Hello, World!';
const helloLength = hello.length; // length: 13
hello[0] = 'L'; // This has no effect, because strings are immutable
console.log(hello[0]); // This returns "H"


// string object methods

// toLowerCase() and toUpperCase()
const mystr1 = 'AbCd';
console.log(mystr1.toLowerCase()); // abcd
console.log(mystr1.toUpperCase()); // ABCD

// indexOf(substr[, fromIndex]) and lastIndexOf(substr[, fromIndex])
const mystr2 = 'abcdxyzabcd';
console.log(mystr2.indexOf('abcd')); // 0
console.log(mystr2.lastIndexOf('abcd')); // 7

// split(separator)
const str = 'The quick brown fox jumps over the lazy dog.';
let splitarr = str.split(' ');
console.log(splitarr);


// slice(startIndex[, uptoIndex]) , substring(startIndex[, uptoIndex]) and substr(startIndex[, length])
const mystr3 = 'abcdefghij';
console.log(mystr3.slice(1,3)); // bc
console.log(mystr3.substring(1,3)); // bc
console.log(mystr3.substr(1,2)); // bc


// concat
const mystr4 = "Hello";
const mystr5 ="world";
console.log(mystr4+" "+mystr5);
console.log(mystr4.concat(" ", mystr5));


// embedded expression
const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
// "Fifteen is 15 and not 20."
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`); // use backtick template literal
// "Fifteen is 15 and not 20."
